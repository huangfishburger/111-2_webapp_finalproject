import React from 'react'
import { Image } from 'antd';

const NFTGallery = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "5vh 45vh"}}>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
                        <Image style={{borderRadius: '15%', overflow: 'hidden'}} width={250} src={require('../assets/NFT_images/unpack.png')} />
                    </div>
                </Image.PreviewGroup>
                <div style={{width: 400, backgroundColor: "#ffffff", padding: "2vh 5vh", lineHeight: 2}}>
                    <p>捐助青蛙保育，贊助我們的 Frogatehr NFT！鑄造您的獨特紀念品，支持保護棲息地、教育和研究項目。成為青蛙保護的倡導者，一起為這些可愛的生物創造更好的未來！捐助青蛙保育，贊助我們的 Frogatehr NFT！鑄造您的獨特紀念品，支持保護棲息地、教育和研究項目。成為青蛙保護的倡導者，一起為這些可愛的生物創造更好的未來！</p>
                </div>
            </div>
            
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "5vh 35vh"}}>
                    <Image style={{borderRadius: '15%', overflow: 'hidden'}} width={150} src={require('../assets/NFT_images/frog0.png')} />
                    <Image style={{borderRadius: '15%', overflow: 'hidden'}} width={150} src={require('../assets/NFT_images/frog1.png')} />
                    <Image style={{borderRadius: '15%', overflow: 'hidden'}} width={150} src={require('../assets/NFT_images/frog2.png')} />
                    <Image style={{borderRadius: '15%', overflow: 'hidden'}} width={150} src={require('../assets/NFT_images/frog3.png')} />
                    <Image style={{borderRadius: '15%', overflow: 'hidden'}} width={150} src={require('../assets/NFT_images/frog4.png')} />
                </div>
            </Image.PreviewGroup>
        </div>
    )
}

export default NFTGallery