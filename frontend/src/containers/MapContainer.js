import { Button, Tooltip } from 'antd';
import styled from 'styled-components';

const ViewButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  right: 5px;
  background: #ffffff70;
  backdrop-filter: blur(5px);
  color: #161616;
  align-items: center;
  display: flex;
  &>span{
    align-items: center;
    display: flex;
  }
`;

const MapContainer = () => {
  return (
    <div id="map">
      <ViewButton type="primary" shape="round">
        <Tooltip title="切換地圖編輯模式">
          <span class="material-icons-round">visibility</span>
          僅顯示
        </Tooltip>
      </ViewButton>
    </div>
  );
};

export { MapContainer }