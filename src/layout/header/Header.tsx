import { Logo } from "../../components/logo/Logo";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";

const items = ["Home", "About", "Portfolio", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <HeaderMenu menuItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 0 20px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99999;
`
