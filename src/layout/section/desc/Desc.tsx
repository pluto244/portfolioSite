import { Skills } from "./skills/Skills";
import { About } from "./about/About";
import { Container } from "../../../components/Container";

export const Desc = () => {
    return (
        <section>
            <Container>
                <Skills />
                <About />
            </Container>
        </section>
    );
};

