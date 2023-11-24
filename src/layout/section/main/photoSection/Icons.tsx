import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

export const Icons = () => {
    return (
        <IconsContainer>
            <NameLink >
                <Icon iconId={"react"} width={"54"} height={"45"} />
            </NameLink>
            <NameLink >
                <Icon iconId={"css"} width={"54"} height={"45"} />
            </NameLink>

            <NameLink >
                <Icon iconId={"styledComp"} width={"54"} height={"45"} />
            </NameLink>
            <NameLink >
                <Icon iconId={"typeScript"} width={"54"} height={"45"} />
            </NameLink>
        </IconsContainer>

    );
}

const IconsContainer = styled.div`

`



const NameLink = styled.div`
    position: relative;
    z-index: 2;
    &::before{
        display: inline-block;
        content: "";
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: ${theme.colors.primaryBg};
        position: absolute;
        z-index: -1;
        top: -25px;
        left: -18px;
    }
    &:nth-child(1){        
        top: -120px;
        left: 50px;
    }
    &:nth-child(2){
        top: -200px;
        left: 440px;
    }
    &:nth-child(3){
        top: -40px;
        right: 36px;
    }
    &:nth-child(4){
        top: 110px;
        left: 0px;
    }
`
