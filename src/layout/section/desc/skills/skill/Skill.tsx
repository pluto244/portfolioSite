import styled from "styled-components"
import { Icon } from "../../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../../components/FlexWrapper";


type SkillPropsType = {
    iconId: string;
    iconName: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
            <Icon iconId={props.iconId} width="114" height="96" viewBox="0 0 50 50" />
            <IconName>
                {props.iconName}
            </IconName>
            </FlexWrapper>
        </StyledSkill>
    )
}



const StyledSkill = styled.div`
    background-color: #ffb846;
    padding: 20px;
    margin: 20px;
`
const IconName = styled.h3`

`