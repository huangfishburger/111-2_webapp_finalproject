import { ProblemCard } from 'components/ProblemCard';
import styled from 'styled-components';
import { Divider, Button, Tooltip} from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ProblemCardRow = styled.div`
  display: flex;
  justifyContent: space-between;
  gap: 2.5rem;
  padding: 8rem 4rem;
  height: 80vh;
`;


const Problem = () => {
    const [ hashtagTypes, setHashtagTypes ] = useState([]);
    const navigate = useNavigate();
    const handleHashtage = (index) => {
        if (hashtagTypes.includes(index)) {
            setHashtagTypes(hashtagTypes.filter(item => item !== index));
          } 
        else {
            setHashtagTypes([index]);
          }
    };
    const onClick = () => {
        navigate('/game');
    };
    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", marginBottom: '-20vh'}}>以下何者為外來種?</h1>
            <ProblemCardRow>
                <ProblemCard
                className={(hashtagTypes.includes(1))? "active": ""}
                onClick={() => handleHashtage(1)}
                photo={require("./frog.jpg")}
                text={"青蛙"}
                />
                <ProblemCard
                className={(hashtagTypes.includes(2))? "active": ""}
                onClick={() => handleHashtage(2)}
                photo={require("./frog1.png")}
                text={"樹蛙"}
                />
                <ProblemCard
                className={(hashtagTypes.includes(3))? "active": ""}
                onClick={() => handleHashtage(3)}
                photo={require("./frog2.jpg")}
                text={"蟾蜍"}
                />
            </ProblemCardRow>

            <div style={{ display: "flex", justifyContent: "space-between" , marginBottom: '10vh' , padding: '0 80vh'}}>
                <Tooltip title="點擊提交答案" >
                    <Button type="primary" style={{width: "64px", height: "30px"}}>
                        提交
                    </Button>
                </Tooltip>
                <Tooltip title="點擊查看解答" >
                    <Button type="primary" style={{width: "64px", height: "30px"}}>
                        解答
                    </Button>
                </Tooltip>
                <Tooltip title="點擊退出遊戲" >
                    <Button type="primary" onClick={onClick} style={{width: "64px", height: "30px"}}>
                        退出
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
  };
  
  export { Problem }