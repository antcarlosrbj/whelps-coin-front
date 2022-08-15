import styled from 'styled-components';

import Header from '../components/Header.js';
import PresentationContent from '../components/PresentationContent.js';
import NftsHome from '../components/Nfts.js';
import Infos from '../components/Infos.js';
import Roadmap from '../components/Roadmap.js';
import MeetOurTeam from '../components/MeetOurTeam.js';
import Partners from '../components/Partners.js';
import Faqs from '../components/Faqs.js';
import Subscribe from '../components/Subscribe.js';
import Footer from '../components/Footer.js';

import background from './../img/fundo-home.png';

export default function Home({token, setToken, name, setName, value, setValue}) {

    return (
        <Main>
            <Presentation>
                <img className='background' src={background} alt="background" />
                <Header token={token} setToken={setToken} name={name} setName={setName} value={value} setValue={setValue}/>
                <PresentationContent/>
            </Presentation>
            <NftsHome/>
            <Infos/>
            <Roadmap/>
            <MeetOurTeam />
            <Partners />
            <Faqs />
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

const Presentation = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;

    img.background {
        width: 100%;
        height: 100vh;
        opacity: 0.1;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
`;