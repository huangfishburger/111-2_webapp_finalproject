import { Image, Collapse } from "antd";
import { StatusTag } from "./Tags";
import { ActionButton } from "./ActionButton";
import { CommentModal } from "../containers/Sences/Record/Modal"
import { useState } from "react";
import { BiDotsHorizontalRounded, BiCommentDetail } from 'react-icons/bi';

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
const timestampTextStyle = {
  fontWeight: "400", 
  fontSize: "xx-small", 
  margin: "10px 0", 
  color: "rgb(102, 102, 102)"
}
const { Panel } = Collapse;

const ListItems = ({ item }) => {
  const [ isCommentModalOpen, setIsCommentModalOpen ] = useState(false);

  const handleCommentModalOpen = () => {
    setIsCommentModalOpen(!isCommentModalOpen);
  };

  const author = 
    (item.userName === undefined) ? "間諜🐸": item.userName

  const text = 
    (item.post === undefined) ? "🐸：…": 
      <div>
        <div style={{fontWeight: "700", marginBottom: "3px", display: "flex", alignItems: "center"}}>
          {author}
        </div>
        <div>{item.post}</div>
      </div>

  const context = 
    <>
      {text} <div style={timestampTextStyle}>{item.updatedAt}</div>
    </>

  return (
    <>
      <Collapse 
        className="collapse-list"
        accordion 
        ghost
        collapsible="icon"
        expandIcon={() => 
          <ActionButton icon={<BiDotsHorizontalRounded />} />
        }
      >
        <Panel 
          id={item._id}
          header={
            <div style={listItemsStyle}>
              <div 
                style={nameTextStyle}
              >
                <Image
                  width={50}
                  style={{borderRadius: "5px"}}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div style={listItemsTextStyle}>
                  <div style={nameTextStyle}>
                    {item.species}
                    {item.hashtag.map((hashtag) => {
                      return (<StatusTag status={hashtag}/>)
                    })}
                  </div>
                  <div style={subNameTextStyle}>
                    {item.placeName}
                  </div>
                </div>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                <ActionButton icon={<BiCommentDetail />} onClickEvent={handleCommentModalOpen}/>
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
        title={item.userName}
        context={context}
        isCommentModalOpen={isCommentModalOpen} 
        setIsCommentModalOpen={setIsCommentModalOpen} 
      />
    </>
  );
};

export { ListItems }