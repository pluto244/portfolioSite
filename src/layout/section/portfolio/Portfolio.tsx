import 'react-slideshow-image/dist/styles.css'
import { SlideShow } from './slideShow/SlideShow';
import proj1 from '../../../accerts/images/proj1.png'
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';
const projects = [
    {
        name: 'Landing Ice-cream',
        url: proj1,
        description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.",

    },
    {
        name: '2',
        url: proj1,
        description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.",
    },
    {
        name: '3',
        url: proj1,
        description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.",
    },
];


export const Portfolio = () => {


    return (
        <PortfolioStyled>
            <Container>
            <TitleStyle>Portfolio</TitleStyle>
                <SlideShow projects={projects} />
            </Container>
        </PortfolioStyled>
    );
};

const PortfolioStyled = styled.section`
    padding: 60px 0 116px;
    height: 100%;
`

const TitleStyle = styled.h2`
    ${font({weight: theme.fonts.h2.weight, Fmax: theme.fonts.h2.size})};
    color: ${theme.colors.descFont};
    margin-bottom: 64px;
    text-align: center;
`
