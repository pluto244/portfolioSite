import styled from "styled-components"
import { theme } from "../../../styles/Theme";

type MenuPropsType = {
    menuItems: Array<string>;
    menuDirection?: string;
};

export const HeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <List>
                {props.menuItems.map((item, index) => {
                    return (
                        <Links key={index}>
                            <Link href="">{item}</Link>
                        </Links>
                    )
                })}
            </List>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
    max-width: 775px;
    width: 100%;
    @media ${theme.media.tablet} {
        display: none;
    }
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    justify-content: space-around;
`

const Links = styled.li`
    position: relative;
    font:  18px;
    &::before{
        content: "";
        display: inline-block;
        height: 2px; 
        background: ${theme.colors.gradient};

        position: absolute;
        top: 100%;
        left: 0;
        right: 10%;
        z-index: 1;

        transform: scale(0);
    
    }
    &:hover{
        &::before{
        transform: scale(1);
        }
    }
`


const Link = styled.a`
    color: #E4E4E4;
`