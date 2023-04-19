import { Modal, Button, Checkbox, Form, Input, Tooltip, message } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';

const UpdateRecordModal = ({ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen }) => {
  const handleCancel = () => {
    setIsUpdateRecordModalOpen(false);
  };

  const onFinish = (values) => {
    message.success("💪🐸：感謝您的貢獻");
  };
  const onFinishFailed = (errorInfo) => {
    message.error("🐸💧：請再次確認您填寫的內容");
  };
  
  return (
    <Modal 
      title="回報紀錄" 
      open={isUpdateRecordModalOpen} 
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{span: 24,}}
        wrapperCol={{span: 24,}}
        initialValues={{
          username: "王大明",
          isAuthPulic: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="物種"
          name="animalName"
          rules={[
            {
              required: true,
              message: '請輸入您所發現的物種!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="發現地點"
          name="placeName"
          rules={[
            {
              required: true,
              message: '請輸入您發現物種之地點!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Tooltip placement="top" title={"參考您目前所在位置"}>
            <Button
                type="primary"
                icon={<EnvironmentFilled />}
                //onClick={handleLocation}
                style={{margin: "0 10px"}}
            />
        </Tooltip>

        <Form.Item
          label="您的名字"
          name="username"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="有什麼想說的..."
          name="context"
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="isAuthPulic"
          valuePropName="checked"      
        >
          <Checkbox>
            同意公開紀錄
            <Tooltip placement="topLeft" title={"🐸：若不同意僅會由管理員知道您的回報"}>
              <span>
                <span class="material-icons-round">help</span>
              </span>
            </Tooltip>
          </Checkbox>
        </Form.Item>
      
        <Form.Item
          wrapperCol={{
            offset: 20,
            span: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            送出
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { UpdateRecordModal };