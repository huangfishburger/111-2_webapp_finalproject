import { List } from 'antd';
import styled from 'styled-components';
import { ListItems } from '../components/ListItems';
import { ListsHeader } from '../components/ListHeader';

const CustomizedLists = styled(List)`
  border: none;
  height: 95vh;
  overflow-y: scroll;
  padding-top: 35px;
`;

const data = [
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "太田樹蛙", "place_name": "五寮尖", "status": "待移除"},
  {'name': "拉都希氏赤蛙", "place_name": "竹山", "status": "已移除"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "詢問"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "太田樹蛙", "place_name": "五寮尖", "status": "待移除"},
  {'name': "拉都希氏赤蛙", "place_name": "竹山", "status": "已移除"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "詢問"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
];

const Lists = () => {
  return (
    <div>
      <CustomizedLists
        header={<ListsHeader />}
        bordered
        dataSource={data}
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