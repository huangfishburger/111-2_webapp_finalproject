import { Modal, Input, Image, Tag, Collapse } from 'antd';
import { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const { Panel } = Collapse;

const CommentContainer = styled.div`
  height: 60vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 5px 0;
`;

const CommentPost = styled(Collapse)`
  & .ant-collapse-content{
    border-bottom: 1px solid rgb(238, 238, 238) !important;
  }
`;

const CommentItem = styled.div`
  max-width: 100%;
  display: flex;
  padding: 12px 3px;
`;

const CommentText = styled.div`
  width: max-content;
  max-width: calc(100% - 100px);
  border-radius: 8px;
  margin-left: 5px;
  padding: 0 10px;
  color: #161616;
  &>.header{
    display: flex;
    align-items: center;
  }
  &>.header>.author{
    font-weight: 700;
    font-size: small;
  }
  &>.header>.time{
    font-weight: 400;
    font-size: xx-small; 
    margin-left: 5px;
    color: rgb(102, 102, 102);
  }
  &>.context{
    font-size: x-small;
    height: max-content;
    max-height: 60px;
    overflow-y: scroll;
  }
  &>.comment-tag{
    font-size: xx-small;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin-top: 5px;
    width: max-content;
    max-width: 80px;
    color: rgb(102, 102, 102);
  }
`;

const CommentModal = ({ title, context, isCommentModalOpen, setIsCommentModalOpen }) => {
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);
  const handleCancel = (e) => {
    setIsCommentModalOpen(false);
  };
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <Modal
      open={isCommentModalOpen}
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
          //onFocus={() => {}}
          //onBlur={() => {}}
        >
          {title}的貼文
        </div>
      }
      footer={
        <div style={{display: "flex"}}>
          <Image
            width={30}
            style={{borderRadius: "50%"}}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />：
          <Input />
        </div>
      }
      onCancel={handleCancel}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <CommentContainer>
        <CommentPost 
          ghost
          //expandIcon={({ isActive }) => isActive ? <IconYouWant /> : <IconYouWant />}
        >
          <Panel>
            <p>{context}</p>
          </Panel>
        </CommentPost>
        <CommentItem>
          <Image
            width={35}
            style={{borderRadius: "50%", marginTop: "4px"}}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <CommentText>
            <div className='header'>
              <span className='author'>間諜青蛙</span>
              <span className='time'>5:20PM | 04.08 2023</span>
            </div>
            <div className='context'>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</div>
            <Tag
              className="comment-tag"
              color={"rgb(238, 238, 238)"}
            >
              🌿
            </Tag>
          </CommentText>
        </CommentItem>
        <CommentItem>
          <Image
            width={35}
            style={{borderRadius: "50%", marginTop: "4px"}}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <CommentText>
            <div className='header'>
              <span className='author'>間諜青蛙</span>
              <span className='time'>5:20PM | 04.08 2023</span>
            </div>
            <div className='context'>HHHHHHHHHHHHHHH</div>
            <Tag
              className="comment-tag"
              color={"rgb(238, 238, 238)"}
            >
              ☘
            </Tag>
          </CommentText>
        </CommentItem>
        <CommentItem>
          <Image
            width={35}
            style={{borderRadius: "50%", marginTop: "4px"}}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <CommentText>
            <div className='header'>
              <span className='author'>間諜青蛙</span>
              <span className='time'>5:20PM | 04.08 2023</span>
            </div>
            <div className='context'>HHHHHHHHHHHHHHH</div>
            <Tag
              className="comment-tag"
              color={"rgb(238, 238, 238)"}
            >
              🍀
            </Tag>
          </CommentText>
        </CommentItem>
        <CommentItem>
          <Image
            width={35}
            style={{borderRadius: "50%", marginTop: "4px"}}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <CommentText>
            <div className='header'>
              <span className='author'>間諜青蛙</span>
              <span className='time'>5:20PM | 04.08 2023</span>
            </div>
            <div className='context'>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</div>
            <Tag
              className="comment-tag"
              color={"rgb(238, 238, 238)"}
            >
              🌱
            </Tag>
          </CommentText>
        </CommentItem>
      </CommentContainer>
    </Modal>
  );
};

export { CommentModal }
