import { Modal } from 'antd';
import { UpdateForm } from '../../components/UpdateForm';

const UpdateRecordModal = ({ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen }) => {
  const handleCancel = () => {
    setIsUpdateRecordModalOpen(false);
  };

  return (
    <Modal 
      title="回報紀錄" 
      open={isUpdateRecordModalOpen} 
      footer={null}
      onCancel={handleCancel}
    >
      <UpdateForm />
    </Modal>
  );
};

export { UpdateRecordModal };