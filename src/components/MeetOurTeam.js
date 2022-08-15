import styled from 'styled-components';

import left from './../img/left-arrow.svg';
import right from './../img/right-arrow.svg';
import twitter from './../img/twitter.svg';
import facebook from './../img/facebook.svg';
import telegram from './../img/telegram.svg';
import discord from './../img/discord.svg';

import userPhoto from './../img/eric-wheeler.png';

export default function MeetOurTeam() {

    return (
        <MeetOurTeamTag>
            <div className='description'>
                <h2>OUR TEAM</h2>
                <h1>MEET OUR TEAM</h1>
                <p className='name'>Lorem ipsum</p>
                <p className='abstract'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='arrows'>
                    <div className='left'><img src={left} alt="left" /></div>
                    <div className='right'><img src={right} alt="right" /></div>
                </div>
            </div>
            <div className='cards'>
                <Card>
                    <img src={userPhoto} alt="userPhoto" />
                    <p className='name'>Eric Wheeler</p>
                    <p className='role'>developer</p>
                    <div className='links'>
                        <div className='twitter'><img src={twitter} alt="twitter" /></div>
                        <div className='facebook'><img src={facebook} alt="facebook" /></div>
                        <div className='telegram'><img src={telegram} alt="telegram" /></div>
                        <div className='discord'><img src={discord} alt="discord" /></div>
                    </div>
                </Card>
                <Card>
                    <img src={userPhoto} alt="userPhoto" />
                    <p className='name'>Eric Wheeler</p>
                    <p className='role'>developer</p>
                    <div className='links'>
                        <div className='twitter'><img src={twitter} alt="twitter" /></div>
                        <div className='facebook'><img src={facebook} alt="facebook" /></div>
                        <div className='telegram'><img src={telegram} alt="telegram" /></div>
                        <div className='discord'><img src={discord} alt="discord" /></div>
                    </div>
                </Card>
                <Card>
                    <img src={userPhoto} alt="userPhoto" />
                    <p className='name'>Eric Wheeler</p>
                    <p className='role'>developer</p>
                    <div className='links'>
                        <div className='twitter'><img src={twitter} alt="twitter" /></div>
                        <div className='facebook'><img src={facebook} alt="facebook" /></div>
                        <div className='telegram'><img src={telegram} alt="telegram" /></div>
                        <div className='discord'><img src={discord} alt="discord" /></div>
                    </div>
                </Card>
            </div>
        </MeetOurTeamTag>
    );
}

const MeetOurTeamTag = styled.div`

    @media (min-width: 1024px) {
        height: 32vw;

        .cards {
            height: 24vw;
            width: 55vw;
        }

        .description {
            padding: 0 1vw 0 10vw;
            height: 24vw;
            width: 40vw;
        }

        .arrows {
            display: flex;
        }

        .description > h2 {
            font-size: 1vw;
        }

        .description > h1 {
            font-size: 2.3vw;
        }

        .description > .name {
            font-size: 1.25vw;
        }

        .description > .abstract {
            font-size: .88vw;
        }
    }

    @media (max-width: 1023px) {
        flex-direction: column;

        .cards {
            flex-direction: column;
            margin-bottom: 5vw;
        }

        .description {
            width: 77vw;
        }

        .arrows {
            display: none;
        }

        .description > h2 {
            font-size: 7.5vw;
            margin-top: 8vw;
        }

        .description > h1 {
            font-size: 10.3vw;
            margin-top: 4vw;
        }

        .description > .name {
            font-size: 5.6vw;
            margin-bottom: 3vw;
        }

        .description > .abstract {
            font-size: 4vw;
            margin-bottom: 5vw;
        }
    }

    background-color: #2B2B2B;
    display: flex;
    align-items: center;

    width: 100%;

    .description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .description > h1 {
        font-family: var(--font-chakra);
        color: #FFFFFF;
        margin-bottom: 3vw;
    }

    .description > h2 {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #AB8B4E;
    }

    .description > .name {
        font-family: var(--font-chakra);
        color: #FFFFFF;
    }

    .description > .abstract {
        font-family: var(--font-ibm);
        color: #FFFFFF;
    }

    .arrows {
        align-items: center;
    }
    .arrows > div {
        display: flex;
        align-items: center;
        width: 2.5vw;
        height: 2.5vw;
        border-radius: .1vw;
        justify-content: center;
        margin-right: .2vw;
        transition: .3s;
    }

    .arrows > div:hover {
        background-color: #AB8B4E;
    }

    .arrows > div > img {
        width: .8vw;
        color: white;
    }

    .cards {
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;

const Card = styled.div`

    @media (min-width: 1024px) {
        width: 17vw;
        height: 23.5vw;

        margin: 0 .3vw;

        & > img {
            width: 14.5vw;
            height: 14.5vw;
        }

        .name {
            width: 14.5vw;
            font-size: 1vw;
            margin-top: 1vw;
        }

        .role {
            width: 14.5vw;
            font-size: .73vw;
            margin-bottom: 1vw;
        }

        .links {
            width: 14.5vw;
        }

        .links > div {
            width: 1.5vw;
            height: 1.5vw;
            border-radius: .5vw;
            margin-right: .5vw;
        }

        .links > div:hover {
            box-shadow: 0px 0px 3vw #00000060;
        }

        .links > div > img {
            width: .73vw;
        }
    }

    @media (max-width: 1023px) {
        width: 77vw;
        height: 107vw;

        margin: 3vw .3vw;

        & > img {
            width: 65.4vw;
            height: 65.4vw;
        }

        .name {
            width: 65vw;
            font-size: 4.5vw;
            margin-top: 4.5vw;
        }

        .role {
            width: 65vw;
            font-size: 3.3vw;
            margin-bottom: 4.5vw;
        }

        .links {
            width: 65vw;
        }

        .links > div {
            width: 6.7vw;
            height: 6.7vw;
            border-radius: 2.24vw;
            margin-right: 2.24vw;

        }

        .links > div:hover {
            box-shadow: 0px 0px 13.5vw #00000060;
        }

        .links > div > img {
            width: 3.3vw;
        }
    }

    background-color: #544118;
    box-shadow: 0px 0px 3.3vw #544118;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    & > img {
        object-fit: cover;
    }

    .name {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #FFFFFF;
    }

    .role {
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #B9B9BF9A;
    }

    .links {
        display: flex;
        align-items: center;
    }

    .links > div {
        background-color: #94815C66;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
    }

    .links > div:hover {
        background-color: #94815C;
    }
`;