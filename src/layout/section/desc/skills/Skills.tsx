import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Skill } from "./skill/Skill"

export const Skills = () => {
    return (

            <FlexWrapper align="center" justify="center">
                <Skill iconId="styledComp" iconName="Styled components" />
                <Skill iconId="typeScript" iconName="TypeScript" />
                <Skill iconId="react" iconName="React" />
                <Skill iconId="css" iconName="HTML" />
            </FlexWrapper>

    )
}

