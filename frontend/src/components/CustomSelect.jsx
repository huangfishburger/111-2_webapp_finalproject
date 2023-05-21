import { Select , Tooltip} from 'antd';

const CustomSelect = ({ defaultValue, options}) => {
  return (
    <Tooltip title="點擊以選擇顯示分類" >
    <Select
      mode="single"
      showArrow={true}
      defaultValue={defaultValue}
      style={{
        width: 'calc(100% - 200px)',
        flex: 1,
        marginRight: '20px',
      }}
      options={options}
    />
    </Tooltip>
  );
};

export { CustomSelect }
