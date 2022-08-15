import styled from 'styled-components';

import bananatok from './../img/bananatok-logo-light-380..png';
import etherscanlight from './../img/etherscanlight.png';
import btok from './../img/btok-logo-light-380..png';
import TechRate from './../img/TechRate-logo-light-380..png';
import certiclogolight from './../img/certiclogolight.png';
import unicrypto from './../img/unicrypto-logo-light-380..png';
import cmc from './../img/cmc-logo-light-380..png';
import uniswaplogolight from './../img/uniswaplogolight.png';
import coingecko from './../img/coingecko-logo-light-380..png';
import worldhealthorganizationlight from './../img/worldhealthorganizationlight.png';
import dext from './../img/dext-logo-light-380..png';

export default function Partners() {

    return (
        <PartnersTag>
            <p className='heading'>PARTNERS</p>
            <p className='subhead'>(SOON) FEATURED ON</p>
            <div className='links'>
                <img src={bananatok} alt="bananatok" />
                <img src={etherscanlight} alt="etherscanlight" />
                <img src={btok} alt="btok" />
                <img src={TechRate} alt="TechRate" />
                <img src={certiclogolight} alt="certiclogolight" />
                <img src={unicrypto} alt="unicrypto" />
                <img src={cmc} alt="cmc" />
                <img src={uniswaplogolight} alt="uniswaplogolight" />
                <img src={coingecko} alt="coingecko" />
                <img src={worldhealthorganizationlight} alt="worldhealthorganizationlight" />
                <img src={dext} alt="dext" />
            </div>
        </PartnersTag>
    );
}

const PartnersTag = styled.div`

    @media (min-width: 1024px) {

        padding: 0 5vw 4.5vw 5vw;

        .heading {
            font-size: 1vw;
            margin-top: 5vw;
        }

        .subhead {
            font-size: 2.3vw;
            margin-top: 1.5vw;
        }

        .links {
            margin-top: 4.5vw;
            height: 9.8vw;
        }

        .links > img {
            height: 3vw;
        }
    }
    @media (max-width: 1023px) {

        padding: 0 5vw 9vw 5vw;


        .heading {
            font-size: 4.7vw;
            margin-top: 21vw;
        }

        .subhead {
            font-size: 9vw;
            margin-top: 8.2vw;
            text-align: center;
        }

        .links {
            margin-top: 9vw;
        }


        .links > img {
            height: 10vw;
        }
    }

    background-color: #0F0F0F;
    display: flex;
    flex-direction: column;
    align-items: center;

    .heading {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #AB8B4E;
        text-shadow: .05vw .05vw .2vw #AB8B4E50;
    }

    .subhead {
        font-family: var(--font-chakra);
        font-weight: 700;
        color: #FFFFFF;
        text-shadow: .05vw .05vw .2vw #FFFFFF50;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-between;
        gap: 3vw;
        opacity: 0.5;
    }
`;