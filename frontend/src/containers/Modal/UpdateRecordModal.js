import { Modal, Button, Checkbox, Form, Input, Tooltip, message, AutoComplete, Pagination, Card } from 'antd';
import { EnvironmentFilled, PushpinFilled, GlobalOutlined, ExceptionOutlined } from '@ant-design/icons';
import { useState, useContext, useEffect } from 'react';
import MapContext from '../../hook/MapContext';
import Frog from "./../../data/frog.json";
import Spot from "./../../data/scenic_spot_C_f.json";
import { getReverseGeocoding } from '../../axios/';
import { toLonLat } from 'ol/proj';
import styled from 'styled-components';
import { ImageUpload } from '../../components/ImageUpload';

const coordTextStyle = {
  fontWeight: "400", 
  fontSize: "xx-small", 
  margin: "0 3px",
  color: "rgb(150, 150, 150)"
}
const speciesDataSource = 
  Frog["species"].map((item, index)=>{
    return {
      "key": index,
      "value": item.name,
      "label": item.name
    }
  });
const spotDataSource =
  Spot["XML_Head"]["Infos"]["Info"].map((item, index)=>{
    var lat_and_lon = Math.round(item.Py*100)/100 + ", " + Math.round(item.Px*100)/100;
    return {
      "key": index,
      "value": item.Name,
      "label": <>{item.Name}<span style={coordTextStyle}>{lat_and_lon}</span></>
    }
  });
const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;
const OptionCard = styled(Card)`
  width: 48%;
  font-size: xx-small; 
  border-color: #D9D9D9;
  color: rgb(102, 102, 102);
  &:hover{
    color: #161616;
    outline: 1px solid #161616;
  }
  &.active{
    color: rgb(98, 109, 75);
    outline: 1.5px solid rgb(98, 109, 75);
  }
  &>div{
    text-align: center;
    fontWeight: 400;
    margin: 10px 0;
  }
  & .anticon{
    font-size: x-large;
    height: 40px;
  }
`;

const SubText = styled.div`
  font-weight: 400;
  font-size: xx-small; 
  margin: 10px 0;
  color: rgb(102, 102, 102);
`;

const UpdateRecordModal = ({ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen }) => {
  const { map, setCenter, setZoom, setIsDraw, userCoord, setUserCoord } = useContext(MapContext);
  const [ userPlaceName, setUserPlaceName ] = useState([]);
  const [ modalPage, setModelPage ] = useState(1);
  const [ locationType, setLocationType ] = useState("");
  const [ recordType, setRecordType ] = useState("public");
  const [ speciesOptions, setSpeciesOptions ] = useState(speciesDataSource);
  const [ locationOptions, setLocationOptions ] = useState([]);
  const [ form ] = Form.useForm();

  useEffect(() => {
    var lat_and_lon = toLonLat(userCoord);
    const fetchData = async () => {
      const result = await getReverseGeocoding(lat_and_lon[1], lat_and_lon[0]);
      setUserPlaceName(result)
    }
    fetchData();
    form.setFieldValue("placeCoord", lat_and_lon);
	}, [userCoord]);


  useEffect(() => {
    var lat_and_lon = toLonLat(userCoord);
    lat_and_lon = Math.round(lat_and_lon[0]*100)/100 + ", " + Math.round(lat_and_lon[1]*100)/100;
    const options = userPlaceName.map((place, index)=>{
      return {
        "key": index,
        "value": place,
        "label": <>{place}<span style={coordTextStyle}>{lat_and_lon}</span></>
      }
    });
    if (options.length > 0) {
      setLocationOptions([options[0], options[1], options[2]]); 
    }
  }, [userPlaceName]);
  
  const onSpeciesSearch = (val) => {
    let filtered = [];
    if (val) {
      filtered = speciesDataSource.filter(
        ({value}) => value.includes(val)
      );
    }
    setSpeciesOptions(filtered);
  };
  const onLocationSearch = (val) => {
    let filtered = [];
    if (val) {
      filtered = spotDataSource.filter(
        ({value}) => value.includes(val)
      );
    };
    setLocationOptions(filtered);
  };
  const handleCancel = () => {
    setIsUpdateRecordModalOpen(false);
  };
  const handleLocation = () => {
    setLocationType("user");
    map.getLayers().forEach((layer) => {
      if (layer.get('name') === 'userlocation') {
        try {
          let coord = layer.getSource().getFeatures()[0].getGeometry()?.getCoordinates();
          setCenter(coord);
          setUserCoord(coord);
          setZoom(14);
          message.success("地圖已縮放到您所在位置");
        } catch(e) {

        }
      }
    })
  };
  const handleDraw = () => {
    setLocationType("draw");
    handleCancel();
    setIsDraw(true);
  };
  const onFinish = (values) => {
    message.success("💪🐸：感謝您的貢獻");
  };
  const onFinishFailed = (errorInfo) => {
    message.error("🐸💧：請再次確認您填寫的內容");
  };

  return (
    <Modal 
      title="回報紀錄" 
      open={isUpdateRecordModalOpen} 
      onCancel={handleCancel}
      footer={null}
      bodyStyle={{minHeight: 150}}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{span: 24,}}
        wrapperCol={{span: 24,}}
        initialValues={{
          username: "王大明",
          isAuthPulic: true,
          placeCoord: userCoord,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{display: (modalPage === 1)? "block": "none"}}>
          <Form.Item
            label="物種"
            name="animalName"
            rules={[
              {
                required: true,
                message: '請輸入您所發現的物種!',
              },
            ]}
            style={{display: (modalPage === 1)? "block": "none"}}
          >
            <AutoComplete
              options={speciesOptions}
              onSearch={onSpeciesSearch}
            >
              <Input />
            </AutoComplete>
            <SubText>🐸：不知道我是誰？</SubText>
          </Form.Item>
          <Form.Item
            name="animalPhoto"   
          >
            <SubText>您可以上傳拍攝到的動物圖片</SubText>
            <ImageUpload />
          </Form.Item>
        </div>

        <div style={{display: (modalPage === 2)? "block": "none"}}>
          <Form.Item
            label={"發現地點"}
            name="placeCoord"
            rules={[
              {
                required: true,
                message: '請開啟定位取得您所在坐標位置或由地圖上繪製地點!',
              },
            ]}
          >
            <SubText>您發現物種之地點坐標</SubText>
            <div style={{display: "flex", marginBottom: "20px", justifyContent: "space-between"}}>
              <OptionCard className={(locationType === "user")? "active": ""} onClick={handleLocation}>
                <div><EnvironmentFilled /></div>
                <div>{"參考您目前所在位置"}</div>
              </OptionCard>
              <OptionCard className={(locationType === "draw")? "active": ""} onClick={handleDraw}>
                <div><PushpinFilled /></div>
                <div>{"在地圖上繪製您所在地"}</div>
              </OptionCard>
            </div>
          </Form.Item>
          <SubText>您發現物種之地點名稱</SubText>
          <Form.Item
            name="placeName"
            rules={[
              {
                required: true,
                message: '請輸入您發現物種之地點名稱!',
              },
            ]}
            
          >
            <AutoComplete
              options={locationOptions}
              onSearch={onLocationSearch}
            >
              <Input />
            </AutoComplete>
          </Form.Item>
        </div>

        <Form.Item
          label="您的名字"
          name="username"
          style={{display: (modalPage === 3)? "block": "none"}}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="有什麼想說的..."
          name="context"
          style={{display: (modalPage === 3)? "block": "none"}}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="分享對象"
          name="isAuthPulic"
          style={{display: (modalPage === 4)? "block": "none"}}     
          rules={[
            {
              required: true,
              message: '請選擇分享對象!',
            },
          ]}
        >
          <div style={{display: "flex", marginBottom: "20px", justifyContent: "space-between"}}>
            <OptionCard className={(recordType === "public")? "active": ""} onClick={()=>setRecordType("public")}>
              <div><GlobalOutlined /></div>
              <div>{"公開顯示發現紀錄、地點與貼文給所有人"}</div>
            </OptionCard>
            <OptionCard className={(recordType === "private")? "active": ""} onClick={()=>setRecordType("private")}>
              <div><ExceptionOutlined /></div>
              <div>{"僅顯示發現紀錄、地點與貼文給志工團隊"}</div>
            </OptionCard>
          </div>
        </Form.Item>
          
        <ModalFooter>
          <Pagination simple 
            defaultCurrent={modalPage} 
            total={40} 
            onChange={(page) => {setModelPage(page)}}
            style={{width: "100%", position: "relative"}}
          />
          <Form.Item
            style={{display: (modalPage === 4)? "block": "none", width: "100%"}}
          >
            <Button type="primary" htmlType="submit" style={{height: "40px"}}>
              送出
            </Button>
          </Form.Item>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export { UpdateRecordModal };