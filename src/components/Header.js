import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './../img/golden-crypto-logo_260.png';

export default function Header({token, setToken, name, setName, value, setValue}) {

    const URL_BACK = 'http://localhost:5000';

    const [account, setAccount] = useState({login: false, signup: false});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameSignUp, setNameSignUp] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);
    /* const [value, setValue] = useState(""); */
    let tokenAux = "";

    function loginForm(event) {
        event.preventDefault();

        setLoading(true);

        const promisse = axios.post(URL_BACK + "/sign-in", {
            email: email,
            password: password
        })

        promisse.then(res => {
            console.log(`_______________________________________ res.data.token: ${res.data.token} (${typeof res.data.token}) - ${JSON.stringify(res.data.token)}`)
            setToken(res.data.token);
            tokenAux = res.data.token;
            setName(res.data.name);
            localStorage.setItem("token", res.data.token);
            setLoading(false);
            setAccount({login: false, signup: false})
            balance();
        });

        promisse.catch(error => {
            setErro(<p className='erro'>Usuário e/ou senha incorretos</p>);
            console.log(error);
            setLoading(false);
        });

    }

    function balance() {
        console.log(`_______________________________________ token: ${token} (${typeof token}) - ${JSON.stringify(token)}`)
        axios.get(URL_BACK + "/balance", {
            headers: {
                'Authorization': `Bearer ${tokenAux}`
            }
        })
        .then(res => {
            setValue(res.data)
        })
        .catch(error => {
            console.log(error);
        });
    }

    function signUpForm(event) {
        event.preventDefault();

        setLoading(true);

        const promisse = axios.post(URL_BACK + "/sign-up", {
            name: nameSignUp,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation
        })

        promisse.then(res => {
            setLoading(false);
            setPassword("");
            setAccount({login: true, signup: false})
        });

        promisse.catch(error => {
            console.log(error);
            setLoading(false);
        });

    }

    return (
        <HeaderDiv>
            <img src={logo} alt="Logo"/>
            <Menu>
                <Link to="/">HOME</Link>
                <Link to="/mind-node">MIND NODE</Link>
                <Link to="/nfts">NFTS</Link>
                <Link to="/trade">TRADE</Link>
            </Menu>
            <Account>
                <button onClick={() => setAccount({login: true, signup: false})}>{name ? `Olá, ${name} - ${formatter.format(value/100)}` : "LOGIN"}</button>
                <div onClick={() => setAccount({login: false, signup: false})} className={account.login || account.signup ? "account" : "account hidden"}></div>
                <form onSubmit={loginForm} className={account.login ? "" : "hidden"}>
                    <input type="email" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required />
                    <input type="password" value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required />
                    <button type="submit">{loading ? "Carregando..." : "Entrar"}</button>
                    {erro}
                    <p className='sign-change' onClick={() => setAccount({login: false, signup: true})}>Primeira vez? Cadastre-se!</p>
                </form>
                <form onSubmit={signUpForm} className={account.signup ? "" : "hidden"}>
                    <input type="name" value={nameSignUp} placeholder="Nome" onChange={e => setNameSignUp(e.target.value)} required />
                    <input type="email" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required />
                    <input type="password" value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required />
                    <input type="password" value={passwordConfirmation} placeholder="Confirmação de senha" onChange={e => setPasswordConfirmation(e.target.value)} required />
                    <button type="submit">{loading ? "Carregando..." : "Cadastrar"}</button>
                    {erro}
                    <p className='sign-change' onClick={() => setAccount({login: true, signup: false})}>Já possui conta? Faça o login!</p>
                </form>
            </Account>
        </HeaderDiv>
    );
}

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const HeaderDiv = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 7.5rem;

    img {
        width: 9rem;
    }

    @media (max-width: 999px) {
        display: none;
    }
`;

const Menu = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 24rem;
    height: 7.5rem;

    a {
        font-family: var(--font-chakra);
        font-size: 1rem;
        text-decoration: none;
        color: #FFFFFF;
        transition: color .3s;
    }

    a:hover {
        color: #b7a682;
    }
`;

const Account = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
        padding: 0.5rem 0.8rem;
        min-width: 6rem;
        border: .125rem solid #B1904A;
        border-radius: 1.125rem;
        background: none;
        text-decoration: none;
        font-family: var(--font-chakra);
        color: white;
        font-size: 1rem;
        height: 100%;
        transition: .3s;
    }

    & > button:hover {
        background-color: #f3d366;
        border-color: #f3d366;
        box-shadow: 0px 0px 30px 0px #caee6340;
        color: #423405;
    }

    .account {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #000000DD;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px;
        background-color: #120b00;
        border-radius: 5px;
    }

    form > input {
        height: 58px;
        width: 326px;
        border-radius: 5px;
        border: 0;  
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 13px;
        font-size: 20px;
    }

    form > button {
        height: 46px;
        width: 326px;
        border-radius: 5px;
        border: 0;
        font-size: 20px;
        font-weight: 700;
        background-color: #955d10;
        color: white;
    }

    form > .erro {
        margin-top: 4px;
        height: 16px;
        font-size: 15px;
        font-weight: 700;
        color: red;
    }

    form > .sign-change {
        font-size: 15px;
        font-weight: 700;
        color: white;
        text-decoration: none;
        margin-top: 16px;
    }

    .hidden {
        display: none;
    }
    
`;