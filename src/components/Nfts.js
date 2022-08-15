import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";

import Nft from '../components/Nft.js';

export default function NftsHome() {

    const nfts = [
        {name:"Sea Green Citya", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityb", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityc", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityd", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Citye", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityf", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityg", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityh", highestBid:2.5, minimumBid:0.499},
        {name:"Sea Green Cityi", highestBid:2.5, minimumBid:0.499}
    ];

    return (
        <>
            <NftsTag>
                {nfts.length !== 0 ? 
                    nfts.map(nft => {return (
                        <Nft name={nft.name} highestBid={nft.highestBid} minimumBid={nft.minimumBid} />
                    )})
                :
                    <TailSpin {...{ color: "#9f844b" }} />
                }
            </NftsTag>
            <GetNfts>
                <Link to="/nfts">GET NTFS</Link>
            </GetNfts>
        </>
    );
}

const NftsTag = styled.div`
    max-width: 100%;

    display: flex;
    padding: 190px 0 30px 0;

    @media (max-width: 1023px) {
        padding: 26vw 0 30px 0;
    }
    
    overflow: auto;
`;

const GetNfts = styled.div`

    @media (max-width: 880px) {
        display: none;
    }

    margin-top: 30px;

    a {
        display: block;
        width: 12.5vw;
        border-radius: 3.34vw;
        border: 2px solid #AB8B4B6C;
        background: none;

        text-decoration: none;
        font-family: var(--font-chakra);
        font-size: 1.25vw;
        line-height: 3.75;
        text-align: center;
        color: #AB8E51;
        transition: .3s;
    }

    a:hover {
        box-shadow: 0 0 2vw rgb(148 120 61 / 80%);
        background-color: #b38d3e;
        color: #FFFFFF;
    }
`;