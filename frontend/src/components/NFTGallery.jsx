import React from 'react'
import { Image } from 'antd';

const NFTGallery = () => {
    const NFTGalleryStyle = {
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <div style={NFTGalleryStyle}>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <Image width={200} src={require('../assets/NFT_images/unpack.png')} />
                <Image width={200} src={require('../assets/NFT_images/frog0.png')} />
                <Image width={200} src={require('../assets/NFT_images/frog1.png')} />
                <Image width={200} src={require('../assets/NFT_images/frog2.png')} />
                <Image width={200} src={require('../assets/NFT_images/frog3.png')} />
                <Image width={200} src={require('../assets/NFT_images/frog4.png')} />
            </Image.PreviewGroup>
        </div>
    )
}

export default NFTGallery