import styled from 'styled-components';

export default function Footer() {

    return (
        <FooterTag>
            <p>© Copyright 2022 Woofie Token.</p>
            <div className='links'>
                <a href='/'>Privacy Policy</a>
                <a href='/'>Cookies</a>
                <a href='/'>Terms & Conditions</a>
                <a href='/'>Contact Us</a>
            </div>
        </FooterTag>
    );
}

const FooterTag = styled.div`

    @media (min-width: 1024px) {
        height: 3.2vw;
        padding: 0 13.6vw;
        margin-top: 1.2vw;
        justify-content: space-between;

        font-size: .8vw;

        .links {
            gap: 2vw;
            display: flex;
        }
        
    }

    @media (max-width: 1023px) {
        height: 14.3vw;
        margin-top: 5.4vw;
        justify-content: center;

        font-size: 3.6vw;

        .links {
            display: none;
        }
    }

    width: 100%;

    background-color: #AB8B4E;
    display: flex;
    align-items: center;


    font-family: var(--font-ibm);
    font-weight: 700;

    & > p {
        color: #F5F5F5;
    }

    .links {
        justify-content: flex-end;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: #F5F5F5;
    }
`;