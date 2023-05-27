import React, { useState } from 'react'
import { Button, Space, InputNumber } from 'antd';
import { PlusOutlined, MinusOutlined, HeartTwoTone } from '@ant-design/icons';

const NFTMintButton = () => {
    const [mintCount, setMintCount] = useState(1);

    const handleIncrease = () => {
        if (mintCount < 5) {
            setMintCount(prevCount => prevCount + 1);
        }
    };

    const handleDecrease = () => {
        if (mintCount > 1) {
            setMintCount(prevCount => prevCount - 1);
        }
    }
    const handleInputChange = (value) => {
        if (value >= 1) {
            setMintCount(value);
        }
    };
    const NFTMintButtonStyle = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div style={NFTMintButtonStyle}>
            <Space wrap>
                <Button type="primary" size='large' shape='round'>Mint NFT</Button>
                <Button onClick={handleDecrease}><MinusOutlined /></Button>
                <InputNumber className="nft-mint-input" prefix={<HeartTwoTone twoToneColor='#FB7DA7' />} min={1} max={5} value={mintCount} onChange={handleInputChange} />
                <Button onClick={handleIncrease}><PlusOutlined /></Button>
            </Space>
            <style jsx>{`
                .nft-mint-input .ant-input-number-input {
                    text-align: center !important;
                }
            `}</style>
        </div>
    )
}
export default NFTMintButton;
