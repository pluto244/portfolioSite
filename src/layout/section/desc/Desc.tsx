import { Skills } from "./skills/Skills";
import { About } from "./about/About";
import { Container } from "../../../components/Container";
import styled from "styled-components";

export const Desc = () => {
    return (
        <DescSection>
            <Container>
                <Skills />
                <About />
            </Container>
        </DescSection>
    );
};

const DescSection = styled.section`
    padding-top: 69px;
    padding-bottom: 138px;
`