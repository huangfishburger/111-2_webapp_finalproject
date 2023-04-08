import { Image, Button, Collapse } from "antd";
import { StatusTag } from "./Tags";
import styled from 'styled-components';

const listItemsStyle = {
  height: "max-content",
  minHeight: "70px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const listItemsTextStyle = {
  margin: "0 10px",
};
const nameTextStyle = {
  fontSize: "medium",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  color: "#161616",
};
const subNameTextStyle = {
  fontSize: "x-small",
  fontWeight: "500",
  margin: "1px 0",
  letterSpacing: "2px",
  color: "#666666",
};
const ActionButton = styled(Button)`
  background: rgb(238, 238, 238);
  color: #666666;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  > * {
    font-size: medium;
  }
`;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const ListItems = ({ item }) => {
  return (
    <Collapse 
      accordion 
      ghost
      collapsible="icon"
      expandIcon={() => 
        <ActionButton class="material-icons-round" shape="circle">
          <span class="material-icons-round">more_horiz</span>
        </ActionButton>
      }
    >
      <Panel 
        header={
          <div style={listItemsStyle}>
            <div style={nameTextStyle}>
              <Image
                width={50}
                style={{borderRadius: "5px"}}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <div style={listItemsTextStyle}>
                <div style={nameTextStyle}>
                  {item.name}
                  <StatusTag status={item.status}/>
                </div>
                <div style={subNameTextStyle}>
                  {item.place_name}
                </div>
              </div>
            </div>
            <div>
              <ActionButton shape="circle">
                <span class="material-icons-round">comment</span>
              </ActionButton>
              <ActionButton shape="circle" style={{opacity:"0"}}>
                <span class="material-icons-round">more_horiz</span>
              </ActionButton>
            </div> 
          </div>
        }
        >
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export { ListItems }