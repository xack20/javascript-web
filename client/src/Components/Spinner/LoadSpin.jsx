import { Spin } from 'antd';
const LoadSpin = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Spin size="large" style={{ marginTop: '250px' }}></Spin>
    </div>
  );
};

export default LoadSpin;
