import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { OptionCard } from 'components/OptionCard';
import { Button, Tooltip} from 'antd';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const names = [];
      // 遍历所有的 name 参数，并获取其值
    for (let i = 1; i <= 6; i++) {
        const paramName = `name${i}`;
        const paramValue = queryParams.get(paramName);
        if (paramValue) {
        names.push(paramValue);
        }
    }
    const [ hashtagTypes, setHashtagTypes ] = useState([]);
    const handleHashtage = (index) => {
        if (hashtagTypes.includes(index)) {
            setHashtagTypes(hashtagTypes.filter(item => item !== index));
          } 
        else {
            setHashtagTypes([index]);
          }
    };
    const onClick = () => {
        navigate('/search');
    };
    return(
        <div>
         <h4 style={{paddingLeft: '10vh',paddingTop: '3vh',marginBottom: '-5vh'}}>以下為搜尋結果</h4>
            {names.map((name, index) => (
                <div style={{margin: '2vh 5vh'}}>
                    <OptionCard 
                        key={index} 
                        className={(hashtagTypes.includes(index))? "active": ""}
                        onClick={() => handleHashtage(index)}
                        text={name}/>
                </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end",marginBottom:"4vh"}}>
                <Tooltip title="點擊重新查詢" >
                <Button type="primary" onClick={onClick}  style={{width: "64px", height: "30px"}}>
                    返回
                </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export { Result }