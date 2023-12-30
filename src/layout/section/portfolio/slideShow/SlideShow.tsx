import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import styled from 'styled-components';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';


type SlideShowTypeProps = {
    projects: Array<{
        name: string;
        url: string;
        description: string;
    }>;
}

export const SlideShow = (props: SlideShowTypeProps) => {

    return (
        <Swiper slidesPerView={1}
            spaceBetween={30}

            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,

            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            
        >

{
    props.projects.map((Project, index) => {
        return (
            <SwiperSlide key={index}>
                <SlideContainer>
                    <StyledProject src={Project.url} />
                    <ProjectDescription>
                        <StyledH3>{Project.name}</StyledH3>
                        <StyledParagrath>{Project.description}</StyledParagrath>
                        <StyledMore>More</StyledMore>
                    </ProjectDescription>
                </SlideContainer>
            </SwiperSlide>
        )
    })
}
        </Swiper >
    );
};

const StyledProject = styled.img`
    border-radius: 29px;
    max-width: 493px;
    min-height: 500px;
    object-fit: cover;
    margin-left: 20px;
`

const ButtonStyle = styled.button`
    box-sizing: border-box;
    background: linear-gradient(87.32deg, rgba(0, 196, 240, 1.00) 0%,rgba(226, 149, 0, 1.00) 100%);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    align-items: center;
`

const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 600px;
    max-width: 970px;
    margin: auto;
    border-radius: 29px;
    background: linear-gradient(130.68deg, rgba(65, 65, 65, 1.00) 0%,rgba(45, 45, 45, 1.00) 100%);
    box-shadow: 0px 4px 15px 0px rgba(27, 27, 27, 0.28);

`
const ProjectDescription = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    min-height:436px;
    max-width: 296px;
    height: 100%;
    margin: 2%;
`

const StyledH3 = styled.h3`
    ${font({weight: theme.fonts.skillTag.weight, Fmax: theme.fonts.skillTag.size})};
    margin-bottom: 10px;
`
const StyledParagrath = styled.p`
    ${font({weight: theme.fonts.p.weight, Fmax: theme.fonts.p.size})};

    position: relative;
    text-align: center;
    margin-bottom: 10px;
`
const StyledMore = styled.span`
    color: ${theme.colors.accent}
`