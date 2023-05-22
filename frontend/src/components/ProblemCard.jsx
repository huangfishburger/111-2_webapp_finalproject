import { Card } from "antd";
import styled from "styled-components";

const MyCard = styled(Card)`
  width: 100%;
  height: 50vh;
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

const ProblemCard = ({ className, onClick, photo, text }) => {
  return (
    <MyCard
      className={className}
      onClick={onClick}
      
    >
      <div 
        style={{
          fontSize: "1rem",
        }}
      >
      </div>
      <img src={photo} alt="frog" style={{ width: "60%", height: "60%" }}/>
      <div>{text}</div>
    </MyCard>
  );
};

export { ProblemCard }
