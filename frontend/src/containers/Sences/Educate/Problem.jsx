import { ProblemCard } from 'components/ProblemCard';
import styled from 'styled-components';
import {  Button, Tooltip, message} from 'antd';
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
    const [flipped, setFlipped] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleHashtage = (index) => {
        if (hashtagTypes.includes(index)) {
            setHashtagTypes(hashtagTypes.filter(item => item !== index));
          } 
        else {
            setHashtagTypes([index]);
          }
    };
    const backClick = () => {
        navigate('/game');
    };
    
    const ansClick = async () => {
        setFlipped(!flipped);
    };
    
    const submitClick = () => {
      if (!isButtonClicked && hashtagTypes.length === 1) {
        setFlipped(false);
        setIsButtonClicked(true);
      }
      else if (hashtagTypes.length === 0) {
            message.error("請選擇一個答案");
      }
    };
      
    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", marginBottom: '-20vh'}}>以下何者為外來種?</h1>
            <ProblemCardRow>
                <ProblemCard
            className={(hashtagTypes.includes(1))? "active": ""}
                onClick={() => handleHashtage(1)}
                photo={require("./frog.jpg")}
                problemtext={"青蛙"}
                answertext={"我是外來種我是外來種我是外來種我是外來種我是外來種"}
                flipped={flipped}
                ans={true}
                />
                <ProblemCard
                className={(hashtagTypes.includes(2))? "active": ""}
                onClick={() => handleHashtage(2)}
                photo={require("./frog1.png")}
                problemtext={"樹蛙"}
                answertext={"我是本土種我是本土種我是本土種我是本土種我是本土種"}
                flipped={flipped}
                ans={false}
                />
                <ProblemCard
                className={(hashtagTypes.includes(3))? "active": ""}
                onClick={() => handleHashtage(3)}
                photo={require("./frog2.jpg")}
                problemtext={"蟾蜍"}
                answertext={"我不知道我是誰我不知道我是誰我不知道我是誰我不知道我是誰我不知道我是誰"}
                flipped={flipped}
                ans={false}
                />
            </ProblemCardRow>

            <div style={{ display: "flex", justifyContent: "space-between" , marginBottom: '10vh' , padding: '0 80vh'}}>
                <Tooltip title="點擊提交答案" >
                    <Button type="primary"  onClick={submitClick} style={{width: "64px", height: "30px"}}>
                        提交
                    </Button>
                </Tooltip>
                <Tooltip title={flipped ? '點擊查看解答' : '點擊查看題目'} >
                    <Button type="primary" onClick={ansClick} style={{width: "64px", height: "30px"}}>
                    {flipped ? '解答' : '題目'}
                    </Button>
                </Tooltip>
                <Tooltip title="點擊退出遊戲" >
                    <Button type="primary" onClick={backClick} style={{width: "64px", height: "30px"}}>
                        退出
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
  };
  
  export { Problem }