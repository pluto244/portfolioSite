import styled from "styled-components"
import { theme } from "../../../../styles/Theme"
import { font } from "../../../../styles/Common"

export const DescriptionSection = () => {
    return (
        <DescriptionBlock>
                <MainTitle>
                    Web developer
                </MainTitle>
                <NameTitle>
                    I`m Egor
                </NameTitle>
                <InfoTitle>
                    I've been doing web design, front-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me
                </InfoTitle>
                <ContactButton>Contact</ContactButton>
        </DescriptionBlock>
    )
}

const DescriptionBlock = styled.div`
    justify-content: space-around;
    max-width: 341px;
    min-height: 387px;
    width: 100%;
`
const MainTitle = styled.h1`
    ${font({weight: theme.fonts.h1.weight, Fmax: theme.fonts.h1.size})};

    margin-bottom: 40px;
`

const NameTitle = styled.h2`
    ${font({ weight: theme.fonts.name.weight, Fmax: theme.fonts.name.size})};

    margin-bottom: 8px;
`

const InfoTitle = styled.p`
    max-width: 336px;
    min-height: 129px;
    ${font({ weight: theme.fonts.p.weight, Fmax: theme.fonts.p.size})};
    color: ${theme.colors.descFont};
    margin-bottom: 14px;

`

const ContactButton = styled.button`
    max-width: 137px;
    height: 47px;
    width: 100%;
    border-radius: 6px;
    background: ${theme.colors.gradient};
    box-shadow: ${theme.colors.blueShadow};
    color: ${theme.colors.mainFont};
    ${font({ weight: theme.fonts.button.weight, Fmax: theme.fonts.button.size})};

    &:hover{
        box-shadow: ${theme.colors.hoverShadow};
        background: ${theme.colors.hoverGradient};
        cursor: pointer;
    };
`