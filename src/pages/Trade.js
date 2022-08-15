import { useState } from 'react';
import styled from 'styled-components';
import { ThreeDots } from "react-loader-spinner";

import Header from '../components/Header.js';
import Subscribe from '../components/Subscribe.js';
import Footer from '../components/Footer.js';

import icon from './../img/presalewoofie.png';
import axios from 'axios';

export default function Trade({token, setToken, name, setName, value, setValue}) {

    const URL_BACK = 'http://localhost:5000';

    const currencyExchange = 5;

    const [woofieBuy, setWoofieBuy] = useState('W$ ' + mask("100"));
    const [woofieSell, setWoofieSell] = useState('W$ ' + mask("100"));
    const [loadingBuy, setLoadingBuy] = useState(false);
    const [loadingSell, setLoadingSell] = useState(false);

    function buyForm(event) {
        event.preventDefault();

        setLoadingBuy(true);

        axios.post(URL_BACK + "/buy", {
            value: parseInt(removeMask(woofieBuy)*100)
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setLoadingBuy(false);
            setWoofieBuy('W$ ' + mask("100"));
            balance();
        })
        .catch(error => {
            setLoadingBuy(false);
            alert("Não foi possível realizar a compra. Tente novamente mais tarde.")
            console.log(error);
        });
    }
    function sellForm(event) {
        event.preventDefault();

        setLoadingSell(true);

        axios.post(URL_BACK + "/sell", {
            value: parseInt(removeMask(woofieSell)*100)
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setLoadingSell(false);
            setWoofieSell('W$ ' + mask("100"));
            balance();
        })
        .catch(error => {
            setLoadingSell(false);
            alert("Não foi possível realizar a venda. Tente novamente mais tarde.")
            console.log(error);
        });
    }

    function balance() {
        axios.get(URL_BACK + "/balance", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setValue(res.data)
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <Main>
            <Header token={token} setToken={setToken} name={name} setName={setName} value={value} setValue={setValue}/>
            <img className='icon' src={icon} alt="icon" />
            <TradeTag>
                <form onSubmit={buyForm} className='buy'>
                    <p className='title'>Buy WOOFIE</p>
                    <div className='label woofie'>
                        <p>WOOFIE</p>
                    </div>
                    <input type="text" value={woofieBuy} onChange={e => setWoofieBuy('W$ ' + mask(e.target.value))} disabled={loadingBuy || loadingSell} />
                    <div className='label brl'>
                        <p>Reais</p>
                    </div>
                    <input type="text" value={'R$ ' + mask((removeMask(woofieBuy)*currencyExchange).toFixed(2))} disabled={true} />
                    <p className='message'></p>
                    <button type="submit" className={(loadingBuy || loadingSell) ? "disabled" : ""}>{loadingBuy ? <ThreeDots {...{ color: "#9f844b" }}/> : "Buy"}</button>
                </form>
                <form onSubmit={sellForm} className='sell'>
                    <p className='title'>Sell WOOFIE</p>
                    <div className='label woofie'>
                        <p>WOOFIE</p>
                    </div>
                    <input type="text" value={woofieSell} onChange={e => setWoofieSell('W$ ' + mask(e.target.value))} disabled={loadingBuy || loadingSell} />
                    <div className='label brl'>
                        <p>Reais</p>
                    </div>
                    <input type="text" value={'R$ ' + mask((removeMask(woofieSell)*currencyExchange).toFixed(2))} disabled={true} />
                    <p className='message'></p>
                    <button className={(loadingBuy || loadingSell) ? "disabled" : ""}>{loadingSell ? <ThreeDots {...{ color: "#9f844b" }}/> : "Sell"}</button>
                </form>
            </TradeTag>
            <Subscribe />
            <Footer />
        </Main>
    );
}

function mask(e) {
    let value = e;
    value = Number(value.replace(/\D/g, ""))/100;
    value = formatter.format(value).replace(/R\$./, "");
    return value;
}

function removeMask(e) {
    let value = e;
    return Number(value.replace(/\D/g,""))/100
}

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const Main = styled.div`

    @media (max-width: 1023px) {
        img.icon {
            width: 42vw;
            margin-top: 16.6vw;
        }
    }
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    .icon {
        width: 8.75vw;
        margin-top: 1.72vw;
        margin-bottom: 3.5vw;
    }
`;

const TradeTag = styled.div`


    @media (min-width: 1024px) {
        min-height: calc(100vh - 33.53vw);

        .buy, .sell {
            width: 44.8vw;
            height: 24.5vw;
            border-radius: 1vw;
            margin: 0 1.35vw;
        }

        .title {
            font-size: 1.88vw;
            margin-top: 1.8vw;
        }

        .label {
            width: 39.5vw;
            margin-top: 2.4vw;
            margin-bottom: .2vw;
            font-size: .73vw;
        }

        input {
            width: 39.74vw;
            height: 2.5vw;
            border-radius: .5vw;
        }

        .message {
            width: 39.5vw;
            font-size: .73vw;
            margin: 1.5vw 0 2.5vw 0;
        }

        button {
            width: 39.74vw;
            height: 2.5vw;
            border-radius: .5vw;
            font-size: 1vw;
        }

        button svg {
            width: 4vw;
        }
    }

    @media (max-width: 1023px) {
        flex-direction: column;
        margin-top: 27.8vw;

        .buy, .sell {
            width: 88.5vw;
            height: 110vw;
            border-radius: 2vw;
            margin-bottom: 11vw;
        }

        .title {
            font-size: 8.4vw;
            margin-top: 4.5vw;
        }

        .label {
            width: 68.2vw;
            margin-top: 11.4vw;
            margin-bottom: 1.5vw;
            font-size: 3.3vw;
        }

        input {
            width: 68.2vw;
            height: 11.2vw;
            border-radius: 2.3vw;
        }

        .message {
            width: 68.2vw;
            font-size: 3.27vw;
            margin: 7vw 0 9vw 0;
        }

        button {
            width: 68.2vw;
            height: 11.2vw;
            border-radius: 2.3vw;
            font-size: 3.27vw;
        }

        button svg {
            width: 18vw;
        }
    }
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 6.5vw;

    font-family: var(--font-chakra);
    font-weight: 700;
    color: #FFFFFF;

    width: 100%;

    .filters {
        display: flex;
        align-items: center;
    }

    .buy, .sell {
        background-color: #9A7F438D;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input {
        border: 0;
        padding-left: .9rem;
        background-color: #FFFFFF;
    }

    input:disabled {
        font-weight: 700;
        color: #000000;
    }

    button {
        border: 0;
        background-color: #000000;
        color: #FFFFFF;
        font-family: var(--font-chakra);
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button.disabled {
        background-color: #161616;
    }
`;