import styled from 'styled-components';

import icon from './../img/presalewoofie.png';

export default function PresentationContent() {

    return (
        <PresentationContentTag>
            <img className='icon-mobile' src={icon} alt="icon" />
            <WhatIs>
                <h1>WHAT IS $WOOFIE?</h1>
                <p>$WOOFIE is a (Dog Friendly) DeFi Token on the Ethereum Blockchain. It gives users the opportunity to earn money in the Woofieverse, while also saving the lives of dogs in the real world. You can use your $WOOFIE tokens to adopt your $WOOFIEPUP in the Woofieverse and we'll save dogs together as community!</p>
                <botton>CONNECT WALLET</botton>
            </WhatIs>
            <img className='icon' src={icon} alt="icon" />
        </PresentationContentTag>
    );
}

const PresentationContentTag = styled.div`

    @media (min-width: 1000px) {
        --height-header: 7.5rem;
        .icon-mobile {
            display: none
        }
    }
    @media (max-width: 999px) {
        --height-header: 0px;
        flex-direction: column;
        .icon {
            display: none
        }
    }

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: calc(100vh - var(--height-header));

    img.icon, img.icon-mobile {
        box-shadow: 0 4vw 6vw rgb(148 120 61 / 24%), 0 -4vw 6vw rgb(148 120 61 / 24%);
        border-radius: 50%;
    }
    
    img.icon {
        width: 30vw;
    }

    img.icon-mobile {
        width: 42vw;
    }

    @media (max-width: 999px) {
        img.icon-mobile {
            width: 42vw;
            max-width: 20.5vh;
        }
    }
`;

const WhatIs = styled.div`

    --font-h1: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 36vw;
    height: 70vh;
    max-height: 530px;

    & > h1 {
        font-family: var(--font-chakra);
        font-size: var(--font-h1);
        color: #AB8B47;
        margin-bottom: 1.5vw;
    }

    & > p {
        overflow: hidden;
        font-family: var(--font-ibm);
        font-size: 1rem;
        line-height: 1.2;
        color: #FFFFFFCD;
    }

    & > botton {
        background-color: #92763C;
        width: 13rem;
        height: 4rem;
        font-size: 1rem;
        border-radius: .26rem;
        box-shadow: 0 0 .4rem #00000060;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: var(--font-chakra);
        color: #FFFFFF;
        text-decoration: none;

        transition: .3s;
    }

    & > botton:hover {
        box-shadow: 0 0 2vw rgb(148 120 61 / 80%);
        background-color: #b38d3e;
    }

    @media (max-width: 1300px) {
        --font-h1: min(14vh, 5rem);

        & > p {
            font-size: min(2.5vh, 1rem);
        }

        & > botton {
            width: min(36vh, 13rem);
            height: min(11vh, 4rem);
            font-size: min(2.8vh, 1rem);
            border-radius: .26rem;
            box-shadow: 0 0 .4rem #00000060;
        }
    }

    @media (max-width: 999px) {
        --font-h1: min(12vw, 7.2vh);
        width: 85vw;
        height: 65vh;
        max-height: 109vw;

        & > p {
            font-size: min(4vw, 2.6vh);
        }

        & > botton {
            width: 49vw;
            height: 15vw;
            font-size: 4.3vw;
            border-radius: 1vw;
            box-shadow: 0 0 1.5vw #00000060;
        }
    }

    @media (max-width: 999px) and (min-aspect-ratio: 1/1) {
        --font-h1: min(12vw, 7.2vh);
        width: 85vw;
        height: 50vh;

        & > p {
            font-size: min(4vw, 3.5vh);
        }

        & > botton {
            width: min(25vw, 33vh);
            height: min(7.5vw, 10vh);
            font-size: min(2vw, 2.7vh);
            border-radius: min(.5vw, .67vh);
            box-shadow: 0 0 1.5vw #00000060;
        }
    }
`;
