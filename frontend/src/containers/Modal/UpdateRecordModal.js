import { Modal, Button, Checkbox, Form, Input, Tooltip, message, AutoComplete, Pagination } from 'antd';
import { EnvironmentFilled, PushpinFilled } from '@ant-design/icons';
import { useState, useContext, useEffect } from 'react';
import MapContext from '../../hook/MapContext';
import Frog from "./../../data/frog.json";
import Spot from "./../../data/scenic_spot_C_f.json";
import { getReverseGeocoding } from '../../axios/';
import { toLonLat } from 'ol/proj';
import styled from 'styled-components';

const coordTextStyle = {
  fontWeight: "400", 
  fontSize: "xx-small", 
  margin: "0 3px",
  color: "rgb(150, 150, 150)"
}

const UpdateRecordModal = ({ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen }) => {
  const { map, setCenter, setZoom, setIsDraw, userCoord, setUserCoord } = useContext(MapContext);
  const [ userPlaceName, setUserPlaceName ] = useState([]);
  const [ modalPage, setModelPage ] = useState(1);

  const speciesDataSource = 
    Frog["species"].map((item, index)=>{
      return {
        "key": index,
        "value": item.name,
        "label": item.name
      }
    })
  ;
  const spotDataSource =
    Spot["XML_Head"]["Infos"]["Info"].map((item, index)=>{
      var lat_and_lon = Math.round(item.Py*100)/100 + ", " + Math.round(item.Px*100)/100;
      return {
        "key": index,
        "value": item.Name,
        "label": <>{item.Name}<span style={coordTextStyle}>{lat_and_lon}</span></>
      }
    })
  ;
  const [ speciesOptions, setSpeciesOptions ] = useState(speciesDataSource);
  const [ locationOptions, setLocationOptions ] = useState([]);

  useEffect(() => {
    var lat_and_lon = toLonLat(userCoord);
    const fetchData = async () => {
      const result = await getReverseGeocoding(lat_and_lon[1], lat_and_lon[0]);
      setUserPlaceName(result);
    }
    fetchData();
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
    map.getLayers().forEach((layer) => {
        if (layer.get('name') === 'userlocation') {
            let coord = layer.getSource().getFeatures()[0].getGeometry()?.getCoordinates();
            setCenter(coord);
            setUserCoord(coord);
            setZoom(14);
            message.success("地圖已縮放到您所在位置");
        }
    })
  };
  const handleDraw = () => {
    handleCancel();
    setIsDraw(true);
  };
  const onFinish = (values) => {
    message.success("💪🐸：感謝您的貢獻");
  };
  const onFinishFailed = (errorInfo) => {
    message.error("🐸💧：請再次確認您填寫的內容");
  };

  const ModalFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;
  
  return (
    <Modal 
      title="回報紀錄" 
      open={isUpdateRecordModalOpen} 
      footer={
        <ModalFooter>
          <Pagination simple 
            defaultCurrent={modalPage} 
            total={40} 
            onChange={(page) => {setModelPage(page)}}
            style={{width: "100%", position: "relative"}}
          />
        </ModalFooter>
      }
      onCancel={handleCancel}
      bodyStyle={{height: 300}}
    >
      <Form
        name="basic"
        labelCol={{span: 24,}}
        wrapperCol={{span: 24,}}
        initialValues={{
          username: "王大明",
          isAuthPulic: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
        </Form.Item>

        <Form.Item
          label={
            <>
              {"發現地點"}
              <Tooltip placement="top" title={"參考您目前所在位置"}>
                <Button
                    type="primary"
                    icon={<EnvironmentFilled />}
                    onClick={handleLocation}
                    style={{margin: "0 10px"}}
                />
              </Tooltip>
              <Tooltip placement="top" title={"在地圖上繪製您所在地"}>
                <Button
                    type="primary"
                    icon={<PushpinFilled />}
                    onClick={handleDraw}
                    style={{margin: "0 10px"}}
                />
              </Tooltip>
            </>
          }
          name="placeName"
          rules={[
            {
              required: true,
              message: '請輸入您發現物種之地點!',
            },
          ]}
          style={{display: (modalPage === 2)? "block": "none"}}
        >
          <AutoComplete
            options={locationOptions}
            onSearch={onLocationSearch}
          >
            <Input />
          </AutoComplete>
        </Form.Item>

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
          name="isAuthPulic"
          valuePropName="checked" 
          style={{display: (modalPage === 4)? "block": "none"}}     
        >
          <Checkbox>
            同意公開紀錄
            <Tooltip placement="topLeft" title={"🐸：若不同意僅會由管理員知道您的回報"}>
              <span>
                <span className="material-icons-round">help</span>
              </span>
            </Tooltip>
          </Checkbox>
        </Form.Item>
      
        <Form.Item
          wrapperCol={{
            offset: 20,
            span: 4,
          }}
          style={{display: (modalPage === 4)? "block": "none"}}
        >
          <Button type="primary" htmlType="submit">
            送出
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { UpdateRecordModal };