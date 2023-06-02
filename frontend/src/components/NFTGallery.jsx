import React from 'react'
import { Image } from 'antd';

const NFTGallery = () => {
    return (
        <div>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
                    <Image style={{borderRadius: '15%', overflow: 'hidden'}} width={250} src={require('../assets/NFT_images/unpack.png')} />
                </div>
            </Image.PreviewGroup>
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