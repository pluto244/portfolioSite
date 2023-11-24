
import { FlexWrapper } from "../../../components/FlexWrapper"
import { PhotoSection } from "./photoSection/PhotoSection"
import { DescriptionSection } from "./descriptionSection/DescriptionSection"
import styled from "styled-components"
import { Container } from "../../../components/Container"
export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around">
                    <DescriptionSection />
                    <PhotoSection />
                </FlexWrapper >
            </Container>
            
        </StyledMain>
    )
}

const StyledMain = styled.section`
    padding: 50px;
    padding-top: 80px;
`

