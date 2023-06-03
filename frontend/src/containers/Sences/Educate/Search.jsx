import React, { useState } from 'react';
import { Divider, Button, Tooltip, Input, Form, message } from 'antd';
import { CustomSelect } from '../../../components/CustomSelect';
import Frog from "assets/frogoption.json";
import { ImageUpload } from 'components/ImageUpload';
import styled from 'styled-components';
import { getFrog } from './../../../axios/getFrog';

const InlineDiv = styled.div`
  width: calc(100% - 64px);
  display: flex;
  &>.ant-form-item{
    width: 100%;
    margin: auto 5px;
  }
`;

const optionsback = [
  {
    key: '1',
    label: '不特定',
    value: "不特定",
  },
  {
    key: '2',
    label: '黃褐色',
    value: "黃褐色",
  },
  {
    key: '3',
    label: '綠褐色',
    value: "綠褐色",
  },
  {
    key: '4',
    label: '灰褐色',
    value: "灰褐色",
  },
  {
    key: '5',
    label: '褐色',
    value: "褐色",
  },
  {
    key: '6',
    label: '黃綠色',
    value: "黃綠色",
  },
  {
    key: '7',
    label: '其他',
    value: "其他",
  }
]

const optionsloc = [
    {
      key: '8',
      label: '不特定',
      value: "不特定",
    },
    {
      key: '9',
      label: '果園',
      value: "果園",
    },
    {
      key: '10',
      label: '樹林',
      value: "樹林",
    },
    {
      key: '11',
      label: '開墾地',
      value: "開墾地",
    },
    {
      key: '12',
      label: '草叢',
      value: "草叢",
    },
    {
      key: '13',
      label: '水溝沼澤',
      value: "水溝沼澤",
    },
    {
      key: '14',
      label: '其他',
      value: "其他",
    }
]

const optionspattern = [
    {
      key: '15',
      label: '不特定',
      value: "不特定",
    },
    {
      key: '16',
      label: '無花紋',
      value: "無花紋",
    },
    {
      key: '17',
      label: '斑點',
      value: "斑點",
    },
    {
      key: '18',
      label: '條紋',
      value: "條紋",
    },
    {
      key: '19',
      label: '不規則花紋',
      value: "不規則花紋",
    },
    {
      key: '20',
      label: '其他',
      value: "其他",
    }
]

const optionstype = [
    {
      key: '23',
      label: '不特定',
      value: "不特定",
    },
    {
      key: '21',
      label: '本土種',
      value: "本土種",
    },
    {
      key: '22',
      label: '外來種',
      value: "外來種",
    },
]

const optionsfrog = 
  Frog["species"].map((item, index)=>{
    return {
      "key": index,
      "value": item.name,
      "label": item.name
    }
  });


const Search = (props) => {
  const formRef = React.useRef(null);
  const [ labelFrogs, setLabelFrogs] = useState([])

  /* FORM SUMBIT */
  const onFinish = async (values) => {
    message.success("💪🐸：查詢成功");
    const data = await getFrog(values);
    console.log(data);
    setLabelFrogs(data);
  };

  /* SELECT CHANGE */
  const onColorChange = (value) => {
    formRef.current?.setFieldValue("color", value);
  };

  const onStyleChange = (value) => {
    formRef.current?.setFieldValue("style", value);
  };

  const onLocationChange = (value) => {
    formRef.current?.setFieldValue("location", value);
  };

  const onSpeciesChange = (value) => {
    formRef.current?.setFieldValue("species", value);
  };

  return (
    <div style={{ ...props.contentStyle}}>
        <h4 style={{paddingLeft: '10vh',paddingTop: '3vh',marginBottom: '-10vh'}}>依標籤查詢</h4>
        <Divider/>
        <Form
          ref={formRef}
          name="searchFrog"
          onFinish={onFinish}
          autoComplete="off"
          style={{paddingInline: '12vh'}}
        >
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <InlineDiv>
              <Form.Item
                name="color"
              >
                <CustomSelect
                    defaultValue="背部顏色"
                    options={optionsback}
                    onChange={onColorChange}
                />
              </Form.Item>
              <Form.Item
                name="location"
              >
                <CustomSelect
                    defaultValue="出沒地點"
                    options={optionsloc}
                    onChange={onLocationChange}
                />
              </Form.Item>
              <Form.Item
                name="style"
              >
                <CustomSelect
                    defaultValue="花紋樣式"
                    options={optionspattern}
                    onChange={onStyleChange}
                />
              </Form.Item>
              <Form.Item
                name="species"
              >
                <CustomSelect
                  defaultValue="種類"
                  options={optionstype}
                  onChange={onSpeciesChange}
                />
              </Form.Item>
            </InlineDiv>
            <Form.Item>
              <Tooltip title="搜尋" >
                <Button type="primary" htmlType="submit" style={{width: "64px", height: "30px"}}>
                  搜尋
                </Button>
              </Tooltip>
            </Form.Item>
          </div>
        </Form>

        <h4 style={{paddingLeft: '10vh',paddingTop: '3vh',marginBottom: '-10vh'}}>依名稱與物種查詢</h4>
        <Divider />
        <div style={{display: "flex", justifyContent: "space-between", paddingInline: '12vh', alignItems: "center"}}>
            <CustomSelect
                defaultValue="物種"
                options={optionsfrog}
            />
            <Tooltip title="填寫青蛙名稱" >
            <Input
                placeholder="例如:莫氏樹蛙"
                style={{ flex: 1, marginRight: '20px', border: 'none'}}
            />
            </Tooltip>
            <Tooltip title="搜尋" >
              <Button type="primary" style={{width: "64px", height: "30px"}}>
                搜尋
              </Button>
            </Tooltip>
        </div>

        <h4 style={{paddingLeft: '10vh',paddingTop: '3vh',marginBottom: '-10vh'}}>依圖片查詢</h4>
        <Divider />
        <div style={{display: "flex", justifyContent: "space-between" ,paddingLeft: '12vh' ,paddingRight: '12vh', alignItems: "center"}}>
            <ImageUpload />
            <Tooltip title="搜尋" >
              <Button type="primary" style={{width: "64px", height: "30px"}}>
                搜尋
              </Button>
            </Tooltip>
        </div>    
        
    </div>
  );
};

export { Search }