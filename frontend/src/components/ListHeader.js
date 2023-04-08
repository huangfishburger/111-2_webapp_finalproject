import { Dropdown, Space, Typography, Button } from 'antd';
import { UpdateRecordModal } from '../containers/Modal';
import { useState } from 'react';

const items = [
  {
    key: '1',
    label: '全部',
  },
  {
    key: '2',
    label: '蛙調',
  },
  {
    key: '3',
    label: '待移除',
  },
  {
    key: '4',
    label: '已移除',
  },
  {
    key: '5',
    label: '詢問',
  }
]

const ListsHeader = () => {
  const [ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen ] = useState(false);
  
  const showModal = () => {
    setIsUpdateRecordModalOpen(true);
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['3'],
          }}
      >
          <Typography.Link>
            <Space>
              Selectable
            </Space>
          </Typography.Link>
      </Dropdown>
      <Button type="primary" onClick={showModal}>
        <span class="material-icons-round">add</span>
      </Button>
      <UpdateRecordModal isUpdateRecordModalOpen={isUpdateRecordModalOpen} setIsUpdateRecordModalOpen={setIsUpdateRecordModalOpen} />
    </div>
  );
};

export { ListsHeader }