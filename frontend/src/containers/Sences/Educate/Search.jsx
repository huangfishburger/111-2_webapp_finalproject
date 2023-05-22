import { Divider } from 'antd';
import { Button, Tooltip, Input} from 'antd';
import { CustomSelect } from '../../../components/CustomSelect';
import Frog from "assets/frogoption.json";
import { ImageUpload } from 'components/ImageUpload';



const optionsback = [
  {
    key: '1',
    label: '不特定',
    value: "randomback",
  },
  {
    key: '2',
    label: '黃褐色',
    value: "yellowbrown",
  },
  {
    key: '3',
    label: '綠褐色',
    value: "greenbrown",
  },
  {
    key: '4',
    label: '灰褐色',
    value: "graybrown",
  },
  {
    key: '5',
    label: '褐色',
    value: "brown",
  },
  {
    key: '6',
    label: '黃綠色',
    value: "yellowgreen",
  },
  {
    key: '7',
    label: '其他',
    value: "othercolor",
  }
]

const optionsloc = [
    {
      key: '8',
      label: '不特定',
      value: "randomlocation",
    },
    {
      key: '9',
      label: '果園',
      value: "orchard",
    },
    {
      key: '10',
      label: '樹林',
      value: "forest",
    },
    {
      key: '11',
      label: '開墾地',
      value: "farmland",
    },
    {
      key: '12',
      label: '草叢',
      value: "grass",
    },
    {
      key: '13',
      label: '水溝沼澤',
      value: "swamp",
    },
    {
        key: '14',
        label: '其他',
        value: "otherlocation",
      }
]

const optionspattern = [
    {
      key: '15',
      label: '不特定',
      value: "randompattern",
    },
    {
      key: '16',
      label: '無花紋',
      value: "none",
    },
    {
      key: '17',
      label: '斑點',
      value: "dot",
    },
    {
      key: '18',
      label: '條紋',
      value: "line",
    },
    {
      key: '19',
      label: '不規則花紋',
      value: "irregularpattern",
    },
    {
      key: '20',
      label: '其他',
      value: "otherpattern",
    }
]

const optionstype = [
    {
      key: '23',
      label: '不特定',
      value: "randomtype",
    },
    {
      key: '21',
      label: '本土種',
      value: "native",
    },
    {
      key: '22',
      label: '外來種',
      value: "alien",
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
  return (
    <div style={{ ...props.contentStyle}}>
        <h4 style={{paddingLeft: '10vh',paddingTop: '3vh',marginBottom: '-10vh'}}>依標籤查詢</h4>
        <Divider style={{ margin: '5vh 0'}} />
        <div style={{display: "flex", justifyContent: "space-between" ,paddingLeft: '12vh' ,paddingRight: '12vh'}}>
            <CustomSelect
                defaultValue="背部顏色"
                options={optionsback}
            />
            <CustomSelect
                defaultValue="出沒地點"
                options={optionsloc}
            />
            <CustomSelect
                defaultValue="花紋樣式"
                options={optionspattern}
            />
            <CustomSelect
                defaultValue="種類"
                options={optionstype}
            />
            <Tooltip title="搜尋" >
              <Button type="primary" style={{width: "64px", height: "30px"}}>
                搜尋
              </Button>
            </Tooltip>
        </div>

        <h4 style={{paddingLeft: '10vh',paddingTop: '3vh',marginBottom: '-10vh'}}>依名稱與物種查詢</h4>
        <Divider style={{ margin: '5vh'}} />
        <div style={{display: "flex", justifyContent: "space-between" ,paddingLeft: '12vh' ,paddingRight: '12vh'}}>
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
        <Divider style={{ margin: '5vh 0'}} />
        <div style={{display: "flex", justifyContent: "space-between" ,paddingLeft: '12vh' ,paddingRight: '12vh'}}>
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