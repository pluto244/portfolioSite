import { theme } from './Theme';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        
        margin: 0;
        font-family:'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.mainFont};
        line-height: normal;
}
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button {
        background-color: unset;
        border: none;
    }
    section:nth-of-type(odd){
        background-color: ${theme.colors.primaryBg};
    }
    section:nth-of-type(even){
        background-color: ${theme.colors.secondaryBg};
    }

`