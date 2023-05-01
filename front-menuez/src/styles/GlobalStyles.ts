import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --red: #830000;
        --black: #000000;
        --white:  #FFFFFF;
        --whitelish-beige: #FFFAFA;
        --whitelish-grey: #D9D9D9;
        --blacklish-grey: #343a40;
        --nav-background:rgba(0, 0, 0, 0.0);
        
        --NATS-20px: 400 20px/42px 'Nats', sans-serif;
        --NATS-30px: 400 30px/15px 'Nats', sans-serif;
        --NATS-30px_63px: 400 30px/63px 'Nats', sans-serif;
        --NATS-100px: 400 100px/211px 'Nats', sans-serif;

        --MERGE-ONE-30px: 400 30px/35px 'Merge One', sans-serif;

        --INTER-20px: 400 20px/24px font-family: 'Inter', sans-serif;
        
        --ROBOTO-10px: 300 10px/24px 'Roboto', sans-serif;
        --ROBOTO-12px: 300 12.8px/19px 'Roboto', sans-serif;
        --ROBOTO-14px: 500 14px/16px 'Roboto', sans-serif;
        --ROBOTO-14px_21px: 300 14px/21px 'Roboto', sans-serif;
        --ROBOTO-14px_21px-BOLD: 500 14px/21px 'Roboto', sans-serif;
        --ROBOTO-16px: 300 16px/24px 'Roboto', sans-serif;
        --ROBOTO-24px: 300 24px/29px 'Roboto', sans-serif;
        --ROBOTO-32px: 300 32px/32px 'Roboto', sans-serif;
        --ROBOTO-32px_48px: 300 32px/48px 'Roboto', sans-serif;
        --ROBOTO-100px: 300 100px/32px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            transition: 0.5s;
        }
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    body {
        background-color: var(--black);
    }
`;
