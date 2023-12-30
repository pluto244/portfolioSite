import styled from "styled-components"
import { Icon } from "../../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { theme } from "../../../../../styles/Theme";
import { font } from "../../../../../styles/Common";


type SkillPropsType = {
    iconId: string;
    iconName: string;
}

export const Skill = (props: SkillPropsType) => {
    return (

        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconContainer>
                    <Icon iconId={props.iconId} width="114" height="96" viewBox="0 0 50 50" />

                </IconContainer>
                <IconName>
                    {props.iconName}
                </IconName>
            </FlexWrapper>
        </StyledSkill >
    )
}



const StyledSkill = styled.div`
    background-color: ${theme.colors.primaryBg};
    width: 270px;
    height: 270px;
    border-radius: 29px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.47);
    margin: 10px;
    @media ${theme.media.tablet} {
        height: 230px;
        width: 230px;
    }
    @media ${theme.media.mobile} {
        height: 200px;
        width: 200px;
    }
`

const IconContainer = styled.div`
    padding-top: 56px;
    padding-bottom: 50px;
    @media ${theme.media.tablet} {
        padding-top: 46px;
        padding-bottom: 40px;
    }
    @media ${theme.media.mobile} {
        padding-top: 36px;
        padding-bottom: 30px;
    }
`

const IconName = styled.h3`
    ${font({weight: theme.fonts.skillTag.weight, Fmax: theme.fonts.skillTag.size})};

`
