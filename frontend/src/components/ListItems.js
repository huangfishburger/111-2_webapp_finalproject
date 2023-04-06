import { Image, Button } from "antd";
import { StatusTag } from "./Tags";
import styled from 'styled-components';

const listItemsStyle = {
  height: "70px",
  width: "100%",
  display: "flex",
  alignItems: "center",
};
const listItemsTextStyle = {
  margin: "0 10px",
};
const nameTextStyle = {
  fontSize: "medium",
  fontWeight: "700",
};
const subNameTextStyle = {
  fontSize: "small",
  margin: "1px 0",
  letterSpacing: "1.5px",
};
const ActionButton = styled(Button)`
  background: #F2F2F2;
  color: #161616;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  > * {
    font-size: medium;
  }
`;

const ListItems = ({ item }) => {
  return (
    <div style={listItemsStyle}>
      <Image
        width={50}
        style={{borderRadius: "5px"}}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div style={listItemsTextStyle}>
        <div style={nameTextStyle}>{item.name}</div>
        <div style={subNameTextStyle}>
          {item.place_name}
          <StatusTag status={item.status}/>
        </div>
      </div>
      <div>
        <ActionButton type="primary" shape="circle">
          <span class="material-icons-round">comment</span>
        </ActionButton>
        <ActionButton type="primary" shape="circle">
          <span class="material-icons-round">more_horiz</span>
        </ActionButton>
      </div>
    </div>
  );
};

export { ListItems }