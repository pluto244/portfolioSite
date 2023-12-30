import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

type MenuPropsType = {
    menuItems: Array<string>;
    menuDirection?: string;
};

export const MobileMenu = (props: MenuPropsType) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <Links key={index}>
                                <Link href="">{item}</Link>
                            </Links>
                        )
                    })}
                </ul>
                
            </MobileMenuPopup>

        </StyledMobileMenu>
    )
}
const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(44, 44, 44, 0.903);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `

}
    
    ul{
        display: flex;
        gap: 20px;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -124px;
    right: -104px;
    width: 200px;
    height: 200px;
    z-index: 999999;
    span{
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.descFont};
        position: absolute;
        left: 50px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);
        `}

        &::before{
            content:"";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.descFont};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0px);
        `}
        }
        &::after{
            content:"";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.descFont};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0px);
        `}
        }
    }
`



const Links = styled.li`
    position: relative;
    ${font({family: theme.fonts.navLinks.family, weight: theme.fonts.navLinks.weight, Fmax: theme.fonts.navLinks.size})};
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