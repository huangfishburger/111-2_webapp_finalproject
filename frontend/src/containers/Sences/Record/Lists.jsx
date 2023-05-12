import { List } from 'antd';
import styled from 'styled-components';
import { ListItems } from 'components/ListItems';
import { ListsHeader } from 'components/ListHeader';
import { useEffect, useState } from 'react';
import { getRecords } from './../../../axios';

const CustomizedLists = styled(List)`
  border: none;
  height: 95vh;
  overflow-y: scroll;
  padding-top: 35px;
`;

const data = [
  {'name': "黑眶蟾蜍", "place_name": "關渡自然公園", "status": "蛙調", "text": " 從上週五開始，今年學校首輪的黑眶趴踢開始了。這幾天晚上我都會跟朋友去幫牠們拍照，也見證了水池裡的卵串從無到滿滿都是的過程。\
  然後就在剛剛，我們拎起了一隻公黑眶並置於手上想觀察除了捏腋下之外還有什麼情況牠會發出釋放叫聲。結果這時，黑眶從手掌心慢慢的往手臂上爬，爬啊爬....然後就突然伏下身不動了。\
  等了一會兒，我跟朋朋發現這個姿勢有點眼熟，手臂晃了晃牠也沒有要放開的意思，才發現原來牠把我朋友的手當成母蛙死死的抱住了😅😅剛好也順便觀察到黑眶的婚刺（*注1）是如何起到作用的，真的是牢牢的抱住手臂🤣\
  到底要單身多久才有辦法饑不擇食到這種程度啊XDD超級好笑，之後我們也有撈幾隻公蛙來嘗試，結果牠們都拼命想逃離五指山，看來只有這隻不挑食呢（？？"},
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
  const [ records, setRecords ] = useState([]);

  const getData = async () => {
    const data = await getRecords();
    setRecords(data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <CustomizedLists
        header={<ListsHeader />}
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