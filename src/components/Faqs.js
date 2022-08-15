import styled from 'styled-components';

import Faq from '../components/Faq.js';

export default function Faqs() {

    const listFaqs = [
        {question: "Lorem Ipsum? a", answer: "a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {question: "Lorem Ipsum? b", answer: "b Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {question: "Lorem Ipsum? c", answer: "c Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {question: "Lorem Ipsum? d", answer: "d Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {question: "Lorem Ipsum? e", answer: "e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
    ];


    return (
        <FaqsTag>
            <p className='heading'>FAQS</p>
            <p className='subhead'>LOOKING FOR ANSWERS?</p>
            <div className='faqs'>
                {listFaqs.map(faq => <Faq question={faq.question} answer={faq.answer} />)}
            </div>
        </FaqsTag>
    );
}

const FaqsTag = styled.div`

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

        .faqs {
            margin-top: 4.5vw;
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

        .faqs {
            margin-top: 15vw;
        }
    }

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

    .faqs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;