import styled from "styled-components";
import { Logo } from "../../../components/logo/Logo";
import { FooterContacts } from "./footerContacts/FooterContacts";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";


const items = ["Home", "About", "Portfolio", "Contact"]
const contacts = [
    {
        name: "Email",
        seoTag: "mailto:roso3600@gmail.com",
        front: "roso3600@gmail.com",
    },
    {
        name: "Inst",
        seoTag: "https://www.instagram.com/accounts/pluto__244",
        front: "pluto__244",
    },
    {
        name: "Phone",
        seoTag: "tel:+79991213600",
        front: "+7 (999) 121-36-00",
    },
]


export const Footer = () => {
    return (
        <StyledFooterSection>
            <Container>
                <FlexWrapper align="center"  justify="space-evenly">
                    <Menu menuDirection={"column"} menuItems={items} />
                    <FooterContacts contacts={contacts} />
                    <FlexWrapper direction="column" justify="space-between">
                        <Logo />
                        <small>Copyright © 2023, Pluto</small>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledFooterSection>
    );
};

const StyledFooterSection = styled.footer`
    background-color: ${theme.colors.secondaryBg};
`