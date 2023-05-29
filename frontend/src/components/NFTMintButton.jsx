import React, { useState } from 'react'
import { Button, Space, InputNumber } from 'antd';
import { PlusOutlined, MinusOutlined, HeartTwoTone } from '@ant-design/icons';
import { useContract } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const NFTMintButton = () => {
    const { contract } = useContract('0x35E108AF62bD185793E4a05c110b36ED1C038280');

    async function connectWallet() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const network = await provider.getNetwork();

                // 檢查是否在正確的網路
                if (network.chainId !== 5) {
                    alert('請切換到 goreli 測試鏈！');
                    return;
                }

                // 返回帳戶和合約實例
                return { account: accounts[0], contract };

            } catch (err) {
                console.error(err);
                alert('連接失敗');
            }
        } else {
            alert('請安裝 Metamask!');
        }
    }

    async function mintNFT() {
        const { account } = await connectWallet();
        const mintPrice = ethers.utils.parseEther("0.01"); // 0.01 ETH

        if (account && contract) {
            try {
                const value = mintPrice.mul(mintCount);
                const tx = await contract.mint(mintCount, { value });
                alert('Minting in progress, please wait for the transaction to complete.');
                await tx.wait();
                alert('Minting completed!');
            } catch (err) {
                console.error(err);
                alert('Minting failed!');
            }
        }
    }


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
                <Button type="primary" size='large' shape='round' onClick={mintNFT}>Mint NFT</Button>
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
