import { List, Typography } from 'antd';
import styled from 'styled-components';
import { ListItems } from './ListItems';

const CustomizedLists = styled(List)`
  border: none;
  height: 90vh;
  overflow-y: scroll;
`;


const data = [
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調"},
];

const Lists = () => {
  return (
    <CustomizedLists
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <ListItems item={item} />
        </List.Item>
      )}
    />
  );
};

export { Lists }