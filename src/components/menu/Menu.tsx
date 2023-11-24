import styled from "styled-components"

type StyledMenuPropsType = {
    direction?: string
}
type MenuPropsType = {
    menuItems:Array<string>;
    menuDirection?: string;
};

export const Menu = (props : MenuPropsType) => {
    return (
        <StyledMenu direction={props.menuDirection}>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return (
                        <li key = {index}>
                        <a href="">{item}</a>
                    </li>
                    )
                })}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav<StyledMenuPropsType>`
    ul {
        display: flex;
        gap: 20px;
        list-style-type: none;
        flex-direction: ${props => props.direction || "row"};
    }
    ul li a{
        text-decoration: none;
        color: #E4E4E4;
    }
`