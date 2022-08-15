import styled from 'styled-components';

import imageInfo from './../img/woofiedashboardweb.png';

export default function Infos() {

    return (
        <InfosTag>
            <Info className='left'>
                <div className='info-content'>
                    <h2>Trade Your Pup</h2>
                    <img className='image' src={imageInfo} alt="Info" />
                    <div className='text'>
                        <h2>Trade Your Pup</h2>
                        <p>$WOOFIEPUPS can be bought, sold and/or traded through the OpenSea NFT Marketplace. This means you do not only have the ability to adopt one through the Woofie Dashboard, but also through OpenSea if that's more suitable for you</p>
                    </div>
                </div>
            </Info>
            <Info className='right'>
                <div className='info-content'>
                    <h2>Trade Your Pup</h2>
                    <img className='image' src={imageInfo} alt="Info" />
                    <div className='text'>
                        <h2>Trade Your Pup</h2>
                        <p>$WOOFIEPUPS can be bought, sold and/or traded through the OpenSea NFT Marketplace. This means you do not only have the ability to adopt one through the Woofie Dashboard, but also through OpenSea if that's more suitable for you</p>
                    </div>
                </div>
            </Info>
            <Info className='left'>
                <div className='info-content'>
                    <h2>Trade Your Pup</h2>
                    <img className='image' src={imageInfo} alt="Info" />
                    <div className='text'>
                        <h2>Trade Your Pup</h2>
                        <p>$WOOFIEPUPS can be bought, sold and/or traded through the OpenSea NFT Marketplace. This means you do not only have the ability to adopt one through the Woofie Dashboard, but also through OpenSea if that's more suitable for you</p>
                    </div>
                </div>
            </Info>
            <Info className='right'>
                <div className='info-content'>
                    <h2>Trade Your Pup</h2>
                    <img className='image' src={imageInfo} alt="Info" />
                    <div className='text'>
                        <h2>Trade Your Pup</h2>
                        <p>$WOOFIEPUPS can be bought, sold and/or traded through the OpenSea NFT Marketplace. This means you do not only have the ability to adopt one through the Woofie Dashboard, but also through OpenSea if that's more suitable for you</p>
                    </div>
                </div>
            </Info>
        </InfosTag>
    );
}

const InfosTag = styled.div`
    margin: 20px 0;
    width: 100%;
`;

const Info = styled.div`

    @media (min-width: 1024px) {
        --width-img-text: 25vw;
        --padding-info-content: 20vw;

        .info-content > h2 {
            display: none;
        }
    }
    --height-info: calc(var(--width-img-text)*.75);

    &.left > .info-content {
        padding-right: 20vw;
    }

    &.right > .info-content {
        padding-left: 25vw;
    }

    @media (max-width: 1023px) {
        --width-img-text: 60vw;
        --padding-info-content: 0px;

        .info-content {
            flex-direction: column;
            align-items: center;
        }

        --height-info: calc(var(--width-img-text)*.75*1.7);

        .text > h2 {
            display: none;
        }
    }

    
    margin: 25px 0;
    width: 100%;
    height: calc(var(--height-info) + 10px);
    background-color: #BFA84A;

    &.left {
        clip-path: polygon(0vw 0px, 75vw 0px, 80vw calc(var(--height-info) + 10px), 0vw calc(var(--height-info) + 10px));
    }
    &.right {
        clip-path: polygon(100% 0px, 25vw 0px, 20vw calc(var(--height-info) + 10px), 100% calc(var(--height-info) + 10px));
    }
    
    .info-content {
        width: 100%;
        height: calc(var(--height-info) + 10px);
        border-top: 1px solid #786B33;
        border-bottom: 1px solid #786B33;
        background-color: #2F240D;

        display: flex;
    }

    &.left > .info-content {
        clip-path: polygon(0vw 0px, calc(75vw - 2px) 0px, calc(80vw - 2px) calc(var(--height-info) + 10px), 0vw calc(var(--height-info) + 10px));
        padding-left: var(--padding-info-content);
    }
    &.right > .info-content {
        clip-path: polygon(100% 0px, calc(25vw + 2px) 0px, calc(20vw + 2px) calc(var(--height-info) + 10px), 100% calc(var(--height-info) + 10px));
        padding-right: var(--padding-info-content);
    }

    .image {
        width: calc(var(--width-img-text) * 0.9);
        height: var(--height-info);
        object-fit: contain;
    }

    .text {
        width: calc(var(--width-img-text) * 1.1);
        height: var(--height-info);
        
        padding: 15px;
    }

    @media (max-width: 880px) {
        .image {
            height: calc(var(--height-info)/2);
        }

        .text {
            height: calc(var(--height-info)/3);
        }
    }
    
    h2 {
        font-family: var(--font-chakra);
        font-size: calc(var(--width-img-text)/15);
        color: #FFFFFF;
        margin: 15px 0;
    }

    .text > p {
        font-family: var(--font-ibm);
        font-size: 12px;
        color: #B9B9BF;
    }

    @media (min-width: 461px) {
        .text > p {
            font-size: calc(var(--width-img-text)/25);
        }
    }
`;