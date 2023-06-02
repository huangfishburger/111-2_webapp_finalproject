import { List } from 'antd';
import styled from 'styled-components';
import { ListItems } from 'components/ListItems';
import { useEffect, useState, useContext } from 'react';
import { getRecords } from './../../../axios';
import { Select, Button, Tooltip } from 'antd';
import { UpdateRecordModal } from 'containers/Sences/Record/Modal';
import { IoAddOutline } from 'react-icons/io5';
import { HiSortDescending } from 'react-icons/hi';
import { tagRender } from 'components/Tags';
import { ActionButton } from 'components/ActionButton';
import MapContext from "hook/MapContext";

const CustomizedLists = styled(List)`
  border: none;
  height: 95vh;
  overflow-y: scroll;
  padding-top: 35px;
`;

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

const Lists = () => {
  const [ records, setRecords ] = useState([]);
  const [ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen ] = useState(false);
  const { setRecordCoords } = useContext(MapContext);

  /* MODAL HANDLER */
  const showModal = () => {
    setIsUpdateRecordModalOpen(true);
  };

  /* GET RECORD WHEN REFRESHING */
  const getData = async () => {
    const data = await getRecords();
    setRecords(data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  /* UPDATE RECORD COORDS */
  useEffect(() => {
    const coords = records.map(({ _id, species, hashtag, coords }) => {
      return {
        id: _id,
        species: species,
        hashtag: hashtag,
        coordinates: coords.coordinates
      };
    });
    setRecordCoords(coords);
  }, [records]);

  return (
    <div>
      <CustomizedLists
        id="list"
        header={
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
              <ActionButton icon={<HiSortDescending />} />
            </Tooltip>
            <Tooltip title="回報紀錄" >
              <Button type="primary" onClick={showModal} style={{width: "64px", height: "30px"}}>
                <IoAddOutline />
              </Button>
            </Tooltip>
            <UpdateRecordModal 
              isUpdateRecordModalOpen={isUpdateRecordModalOpen} 
              setIsUpdateRecordModalOpen={setIsUpdateRecordModalOpen} 
              setRecords={setRecords}
            />
          </div>
        }
        bordered
        dataSource={records}
        renderItem={(item) => (
          <List.Item>
            <ListItems item={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export { Lists }