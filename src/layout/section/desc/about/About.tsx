import { FlexWrapper } from "../../../../components/FlexWrapper"
import meColored from "../../../../accerts/images/meColored.png";
import meBlackNWhite from "../../../../accerts/images/meBlackNWhite.png";
import meMajor from "../../../../accerts/images/meMajor.png";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

export const About = () => {
    return (
        <FlexWrapper justify="center">
            <Images>
                <ImageStyle>
                    <AboutImg src={meColored} />
                </ImageStyle>

                <ImageStyle>
                    <AboutImg src={meMajor} />
                </ImageStyle>
            </Images>
            <FlexWrapper direction="column" align="center">
                <TitleStyle>About me</TitleStyle>
                <TextContainer>
                    <Text>Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                        By trusting me, you will get the maximum return for your project, save your nerves and time.
                        If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
                    </Text>
                </TextContainer>
            </FlexWrapper>
            <ImageStyle>
                <AboutImg src={meBlackNWhite} />
            </ImageStyle>
        </FlexWrapper >
    )
}
const Images = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
const ImageStyle = styled.div`
    width: 278px;
    height: 278px;
    margin: 28px 6px 0 0;
    border-radius: 14px;
    box-shadow: 0px 0px 0px 34px ${theme.colors.primaryBg}; 
    z-index: 0;
    :nth-child(1){
    } 
    :nth-child(2){
    } 
    :nth-child(3){
        z-index: 0;
        margin-left: 6px;
        margin-top: 25%;
        @media screen and (max-width: 969px) {
            display: none;
        }
    } 
    @media ${theme.media.tablet} {
        width: 200px;
        height: 200px;  
        border-radius: 4px;
        box-shadow: 0px 0px 0px 20px ${theme.colors.primaryBg};
    }
    @media ${theme.media.mobile} {
        width: 120px;
        height: 200px;  
    }
`

const AboutImg = styled.img`    
    width: 278px;
    height: 278px;
    object-fit: cover;
    box-shadow: 0px 0px 0px 6px ${theme.colors.secondaryBg};  
    @media ${theme.media.tablet} {
        width: 200px;
        height: 200px;  
    }
    @media ${theme.media.mobile} {
        width: 120px;
        height: 200px;  
    }
`
const TitleStyle = styled.h2`
    ${font({weight: theme.fonts.h2.weight, Fmax: theme.fonts.h2.size})};
`
const TextContainer = styled.div`
    background: #2c2c2c;
    border-radius: 14px;
    max-width: 496px;
    min-height: 100%;
    height: 100%;
    z-index: 1;

`
const Text = styled.p`
    margin: 62px;
    ${font({weight: theme.fonts.p.weight, Fmax: theme.fonts.p.size})};
    @media screen and (max-width: 969px) {
        margin: 30px;
    }
`

