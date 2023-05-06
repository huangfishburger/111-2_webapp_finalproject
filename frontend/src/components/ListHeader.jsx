import { Select, Button, Tooltip } from 'antd';
import { UpdateRecordModal } from '../containers/Modal';
import { useState } from 'react';
import { tagRender } from './Tags';
import { ActionButton } from './ActionButton';

const options = [
  {
    key: '1',
    label: '全部',
    value: "all",
  },
  {
    key: '2',
    label: '蛙調',
    value: "frogSurvey",
  },
  {
    key: '3',
    label: '待移除',
    value: "remove",
  },
  {
    key: '4',
    label: '已移除',
    value: "removed",
  },
  {
    key: '5',
    label: '詢問',
    value: "question",
  }
]

const ListsHeader = () => {
  const [ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen ] = useState(false);
  
  const showModal = () => {
    setIsUpdateRecordModalOpen(true);
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <Tooltip title="點擊以選擇顯示分類" >
        <Select
          mode="multiple"
          showArrow={false}
          tagRender={tagRender}
          defaultValue={['all']}
          style={{
            width: 'calc( 100% - 100px )',
          }}
          options={options}
        />
      </Tooltip>
      <Tooltip title="依照時間排序" >
        <ActionButton icon={"sort"} />
      </Tooltip>
      <Tooltip title="回報紀錄" >
        <Button type="primary" onClick={showModal} style={{width: "64px", height: "30px"}}>
          <span className="material-icons-round">add</span>
        </Button>
      </Tooltip>
      <UpdateRecordModal isUpdateRecordModalOpen={isUpdateRecordModalOpen} setIsUpdateRecordModalOpen={setIsUpdateRecordModalOpen} />
    </div>
  );
};

export { ListsHeader }


