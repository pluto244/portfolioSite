
import { FlexWrapper } from "../../../components/FlexWrapper"
import { PhotoSection } from "./photoSection/PhotoSection"
import { DescriptionSection } from "./descriptionSection/DescriptionSection"
import styled from "styled-components"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap">
                    <DescriptionSection />
                    <PhotoContainer>
                        <PhotoSection />
                    </PhotoContainer>
                </FlexWrapper >
            </Container>
            
        </StyledMain>
    )
}

const StyledMain = styled.section`
    padding-top: 50px;
`

const PhotoContainer = styled.div`
    @media ${theme.media.tablet}{
        display: none;
    }
`