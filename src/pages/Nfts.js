import { useState } from 'react';
import styled from 'styled-components';
import { TailSpin } from "react-loader-spinner";

import Header from '../components/Header.js';
import Subscribe from '../components/Subscribe.js';
import Footer from '../components/Footer.js';

import Nft from '../components/Nft.js';

import icon from './../img/presalewoofie.png';
import downArrow from './../img/down-arrow.svg';

export default function Nfts({token, setToken, name, setName, value, setValue}) {

    const [search, setSearch] = useState("");

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

    const [buttons, setButtons] = useState({categories: false, sorting: false});

    function click(button) {
        if (buttons[button]) {
            document.querySelector('.categories').classList.remove("clicked");
            document.querySelector('.sorting').classList.remove("clicked");
            setButtons({categories: false, sorting: false})
        } else {
            const aux = {categories: false, sorting: false};
            aux[button] = true;
            document.querySelector('.categories').classList.remove("clicked");
            document.querySelector('.sorting').classList.remove("clicked");
            document.querySelector('.'+button).classList.add("clicked");
            setButtons(aux)
        }
    }

    const [categories, setCategories] = useState("All categories");
    const [sorting, setSorting] = useState("Default sorting");

    return (
        <Main>
            <Header token={token} setToken={setToken} name={name} setName={setName} value={value} setValue={setValue}/>
            <NftsTag>
                <img className='icon' src={icon} alt="icon" />
                <div className='filters'>
                    <input type="text" value={search} placeholder="Search" onChange={e => setSearch(e.target.value)} />
                    <div className='categories' onClick={() => click("categories")}>
                        <p>{categories}</p>
                        <img className='down-arrow' src={downArrow} alt="downArrow" />
                        <div className="categories-content">
                            <p onClick={() => setCategories("Categorie #01")}>Categorie #01</p>
                            <p onClick={() => setCategories("Categorie #02")}>Categorie #02</p>
                            <p onClick={() => setCategories("Categorie #03")}>Categorie #03</p>
                        </div>
                    </div>
                    <div className='sorting' onClick={() => click("sorting")}>
                        <p>{sorting}</p>
                        <img className='down-arrow' src={downArrow} alt="downArrow" />
                        <div className="sorting-content">
                            <p onClick={() => setSorting("Sorting #01")}>Sorting #01</p>
                            <p onClick={() => setSorting("Sorting #02")}>Sorting #02</p>
                            <p onClick={() => setSorting("Sorting #03")}>Sorting #03</p>
                        </div>
                    </div>
                </div>
                <NftsList nfts={nfts.length}>
                    {nfts.length !== 0 ? 
                        nfts.map(nft => {return (
                            <Nft name={nft.name} highestBid={nft.highestBid} minimumBid={nft.minimumBid} />
                        )})
                    :
                        <TailSpin {...{ color: "#9f844b" }}/>
                    }
                </NftsList>
            </NftsTag>
            <Subscribe />
            <Footer />
        </Main>
    );
}

const Main = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

const NftsTag = styled.div`


    @media (min-width: 1024px) {

        img.icon {
            --width-nft: 15;
            display: none;
        }

        .filters {
            width: 66.3vw;
            height: 2.7vw;
        }

        input {
            width: 17.2vw;
            height: 2.7vw;
            margin-right: 24.1vw;
            border-radius: .26vw;
            padding: .78vw;
            font-size: 1.3vw;
        }

        input::placeholder, input {
            font-size: 1vw;
        }

        .categories, .sorting {
            width: 12.5vw;
            padding: 0 1.04vw;
            height: 100%;
        }

        .categories > p, .sorting > p {
            font-size: 1vw;
        }

        .categories > img, .sorting > img {
            width: .8vw;
            right: 1.04vw;
        }

        .categories-content > p, .sorting-content > p {
            height: 2.7vw;
            line-height: 2.7vw;
            padding: 0 1.04vw;
            font-size: 1vw;
        }
    }

    @media (max-width: 1023px) {

        img.icon {
            --width-nft: 70;
            width: 42vw;
            margin-top: 16.6vw;
        }

        .filters {
            width: 77vw;
            flex-direction: column;
            margin-top: 23vw;
        }

        input {
            width: 77vw;
            height: 12vw;
            border-radius: 1vw;
            padding: 3vw;
            font-size: 4vw;
        }

        input::placeholder, input {
            font-size: 4vw;
        }

        .categories, .sorting {
            width: 77vw;
            height: 12vw;
            padding: 0 4vw;
            margin-top: 2.5vw;
        }

        .categories > p, .sorting > p {
            font-size: 4vw;
        }

        .categories > img, .sorting > img {
            width: 3.6vw;
            right: 4vw;
        }

        .categories-content > p, .sorting-content > p {
            height: 12vw;
            line-height: 12vw;
            padding: 0 4vw;
            font-size: 4vw;
        }
    }
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: calc(100vh - 33.53vw);
    margin-top: 6vw;

    .filters {
        display: flex;
        align-items: center;
    }

    input {
        border: 0;  
        background-color: #0A0A0A;
    }

    input::placeholder, input {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #B9B9BF;
    }

    .categories, .sorting {
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: .3s;
        position: relative;
    }

    .categories > img, .sorting > img {
        position: absolute;
    }

    .categories:hover, .sorting:hover {
        background-color: #FFFFFF20;
    }

    .categories > p, .sorting > p {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #B9B9BF;
    }

    .categories-content, .sorting-content {
        position: absolute;
        background-color: #000000E6;
        top: 100%;
        left: 0;
        right: 0%;
        z-index: 1;
        transition: 0.5s;
        display: none;
    }
    
    .categories-content > p, .sorting-content > p {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #B9B9BF;
    }

    .categories-content > p:hover, .sorting-content > p:hover {
        background-color: #FFFFFF20;
    }

    .clicked > .categories-content, .clicked > .sorting-content {
        display: block;
    }
`;

const NftsList = styled.div`

    @media (max-width: 1023px) {
        & > div {
            margin-top: 6vw;
            --width-nft: 65vw;
        }
    }

    padding: 5vw 12vw;
    
    display: flex;
    justify-content: ${(props) => props.nfts === 0 ? 'center' : 'normal'};
    flex-wrap: wrap;
    gap: 2vw 0;
    

    width: 100%;
`;