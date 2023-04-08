import { Image, Collapse } from "antd";
import { StatusTag } from "./Tags";
import { ActionButton } from "./ActionButton";
import { CommentModal } from "../containers/Modal"
import { useState } from "react";

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
  letterSpacing: "1.5px",
  color: "#666666",
};
const { Panel } = Collapse;

const ListItems = ({ item }) => {
  const [ isCommentModalOpen, setIsCommentModalOpen ] = useState(false);

  const handleCommentModalOpen = () => {
    setIsCommentModalOpen(!isCommentModalOpen);
  };

  const author = 
    (item.author === undefined) ? "間諜🐸": item.author

  const text = 
    (item.text === undefined) ? "🐸：…": 
      <div>
        <div style={{fontWeight: "700", marginBottom: "3px", display: "flex", alignItems: "center"}}>
          {author}
        </div>
        <div>{item.text}</div>
      </div>

  const context = 
    <>
      {text} <div style={{fontWeight: "400", fontSize: "xx-small", margin: "10px 0", color: "rgb(102, 102, 102)"}}>5:20PM | 04.08 2023</div>
    </>
  
  return (
    <>
      <Collapse 
        className="collapse-list"
        accordion 
        ghost
        collapsible="icon"
        expandIcon={() => 
          <ActionButton icon={"more_horiz"} />
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
              <div style={{display: "flex", alignItems: "center"}}>
                <ActionButton icon={"comment"} onClickEvent={handleCommentModalOpen}/>
                <div style={{width: "32px", height: "32px", display: "inline-flex"}}></div>
              </div> 
            </div>
          }
          >
          <p>
            {context}
          </p>
        </Panel>
      </Collapse>
      <CommentModal 
        title={item.name}
        context={context}
        isCommentModalOpen={isCommentModalOpen} 
        setIsCommentModalOpen={setIsCommentModalOpen} 
      />
    </>
  );
};

export { ListItems }