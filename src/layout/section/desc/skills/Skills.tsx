import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Skill } from "./skill/Skill"

export const Skills = () => {
    return (
        <SkillsWrapper >
            <FlexWrapper align="center" justify="center" wrap="wrap">
                <Skill iconId="styledComp" iconName="Styled components" />
                <Skill iconId="typeScript" iconName="TypeScript" />
                <Skill iconId="react" iconName="React" />
                <Skill iconId="css" iconName="HTML" />
            </FlexWrapper>
        </SkillsWrapper>
    )
}

const SkillsWrapper = styled.div`
    margin-bottom: 140px;
`