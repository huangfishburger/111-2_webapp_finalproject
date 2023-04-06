import { Tag } from 'antd';
import styled from 'styled-components';

const CustomizedTag = styled(Tag)`
  border-radius: 20px;
  min-width: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: 3px;
  margin: 0 5px;
  font-size: xx-small;
`;

const statusColor = {
  "蛙調": "#626D4B",
  "待移除": "#940C25",
  "詢問": "#104F44",
  "已移除": "#940C25",
}

const StatusTag = ({ status }) => {
  return (
    <CustomizedTag color={statusColor[status]}>
      {status}
    </CustomizedTag>
  );
}

export { StatusTag }
