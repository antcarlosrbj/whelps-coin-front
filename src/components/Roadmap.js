import styled from 'styled-components';

import playingVideoGames from './../img/playing-video-games.png';

export default function Roadmap() {

    const timeLineData = [
        {title: "Q1 2022", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {title: "Q2 2022", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {title: "Q3 2022", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {title: "Q4 2022", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {title: "Q5 2022", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {title: "Q6 2022", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}
    ];
    return (
        <RoadmapTag>
            <p className='heading'>ROADMAP</p>
            <p className='subhead'>$WOOFIE</p>
            <img className='background' src={playingVideoGames} alt="background playing video games" />
            <Timeline>
            {timeLineData.map((content, index) => {
                return (
                    <div class={index%2 ? "content right" : "content left"}>
                        <p class="title-content">{content.title}</p>
                        <p class="text-content">{content.text}</p>
                        <div class="intersection"></div>
                    </div>
                );})}
            </Timeline>
        </RoadmapTag>
    );
}

const editRoadmapTag = `
    height: 80vw;
`

const editRoadmapTagMobile = `
    height: 430vw;
`

const editTimeline = `

    & > .content:nth-child(1) {
        top: 13.4vw;
    }

    & > .content:nth-child(2) {
        top: 21.9vw;
    }

    & > .content:nth-child(3) {
        top: 30.4vw;
    }

    & > .content:nth-child(4) {
        top: 38.9vw;
    }

    & > .content:nth-child(5) {
        top: 47.4vw;
    }

    & > .content:nth-child(6) {
        top: 55.9vw;
    }

`

const editTimelineMobile = `

    & > .content:nth-child(1) {
        top: 60vw;
    }

    & > .content:nth-child(2) {
        top: 120vw;
    }

    & > .content:nth-child(3) {
        top: 180vw;
    }

    & > .content:nth-child(4) {
        top: 240vw;
    }

    & > .content:nth-child(5) {
        top: 300vw;
    }

    & > .content:nth-child(6) {
        top: 360vw;
    }

`

const RoadmapTag = styled.div`
    @media (min-width: 1024px) {

        padding: 0 5vw 4.5vw 5vw;
        ${editRoadmapTag}

        p {
            margin: 1vw;
        }

        .heading {
            font-size: 1vw;
            margin-top: 5vw;
        }

        .subhead {
            font-size: 2.3vw;
            margin-top: 1.5vw;
        }

        .title-content {
            margin-top: 1.5vw;
            font-size: 1.875vw;
        }

        .text-content {
            margin-bottom: 1.5vw;
            font-size: .89vw;
        }

    }
    @media (max-width: 1023px) {

        padding: 0 5vw 9vw 5vw;
        ${editRoadmapTagMobile}

        p {
            margin: 5vw;
        }

        .heading {
            font-size: 4.7vw;
            margin-top: 21vw;
        }

        .subhead {
            font-size: 9vw;
            margin-top: 8.2vw;
            text-align: center;
        }

        .title-content {
            margin-top: 5vw;
            font-size: 9vw;
        }

        .text-content {
            margin-bottom: 5vw;
            font-size: 4vw;
        }
    }

    position: relative;
    width: 100%;
    overflow-x: hidden;

    .heading {
        text-align: center;
        font-family: var(--font-ibm);
        font-weight: 700;
        color: #AB8B4E;
        text-shadow: .05vw .05vw .2vw #AB8B4E50;
    }

    .subhead {
        text-align: center;
        font-family: var(--font-chakra);
        font-weight: 700;
        color: #FFFFFF;
        text-shadow: .05vw .05vw .2vw #FFFFFF50;
    }

    img.background {
        width: 100%;
        height: 100%;
        opacity: 0.3;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }

    .title-content {
        font-family: var(--font-chakra);
        font-weight: 700;
        color: #FFFFFF;
    }

    .text-content {
        font-family: var(--font-ibm);
        font-weight: 700;
        line-height: 1.5;
        color: #B9B9BF;
    }
`;

const Timeline = styled.div`

    @media (min-width: 1024px) {

        ${editTimeline}

        .content {
            width: 20.8vw;
            min-height: 10.8vw;
        }

        .content.left {
            left: 25.8vw;
        }

        .content.right {
            left: 53.2vw;
        }

        .content::after {
            left: 19.9vw;
        }

    }

    @media (max-width: 1023px) {

        ${editTimelineMobile}
        
        .content {
            width: 83.2vw;
            min-height: 43.2vw;
        }

        .content.left, .content.right {
            left: 8.4vw;
        }

        .content::after {
            left: 82.3vw;
        }
    }


    .content {
        position: absolute;
        background-color: #414146cc;

        border: .1vw solid #414146cc;

        transition: .3s;
    }

    .content:hover {
        background-color: #AB8B4Ecc;
        border: .1vw solid #FFA700;
        box-shadow: 0 0 3vw rgb(148 120 61 / 80%);
    }

    .content::before {
        content: '';
        display: block;
        position: absolute;
        width: 1vw;
        height: calc(100% + .2vw);
        left: -.1vw;
        top: -.1vw;
        background: #575360;
        clip-path: polygon(1vw 0vw, 0vw 0vw, 0vw 100%, 1vw 100%, 1vw calc(100% - .2vw), .2vw calc(100% - .2vw), .2vw .2vw, 1vw .2vw);
        -webkit-animation: enter-left 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: enter-left 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .content::after {
        content: '';
        display: block;
        position: absolute;
        width: 1vw;
        height: calc(100% + .2vw);
        top: -0.1vw;
        background: #575360;
        clip-path: polygon(0vw 0vw, 1vw 0vw, 1vw 100%, 0vw 100%, 0vw calc(100% - .2vw), .8vw calc(100% - .2vw), .8vw .2vw, 0vw .2vw);
        -webkit-animation: enter-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: enter-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .content:hover:after {
        -webkit-animation: exit-right 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	    animation: exit-right 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    .content:hover:before {
        -webkit-animation: exit-left 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: exit-left 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    .intersection {
        position: absolute;
        width: 0.2vw;
        height: 100%;
        top: 0;
        background: #AC9249;
    }

    .left > .intersection {
        left: 23.7vw;
    }

    .right > .intersection {
        left: -3.7vw;
    }

    .intersection::after {
        content: '';
        display: block;
        position: absolute;
        height: 0.2vw;
        top: calc((100% - .9vw)/2);
        background: #AC9249;
    }

    .left > .intersection::after {
        width: 2.7vw;
        left: -2.7vw;
    }

    .right > .intersection::after {
        width: 3.1vw;
        left: .5vw;
    }

    .intersection::before {
        content: '';
        display: block;
        position: absolute;
        width: 0.9vw;
        height: 0.9vw;
        left: -0.35vw;
        top: calc((100% - 1.5vw)/2);
        background: #FFFFFF;
        z-index: 1;
    }

    @media (max-width: 1023px) {
        .intersection {
            width: 0;
        }

        .intersection::before {
            display: none;
        }

        .left > .intersection::after {
            width: 8.2vw;
            left: 59.3vw;
        }

        .right > .intersection::after {
            width: 8.3vw;
            left: -4.9vw;
        }
    }
`;