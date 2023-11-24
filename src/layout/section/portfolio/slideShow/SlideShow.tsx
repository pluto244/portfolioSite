import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
import 'react-slideshow-image/dist/styles.css'
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';


type SlideShowTypeProps = {
    images: Array<{
        name: string;
        url: string;
        description: string;
    }>;
}

export const SlideShow = (props: SlideShowTypeProps) => {

    return (
        
        <Slide {...properties}>
            
            {props.images.map((Image, index) => {
                return (
                    <SlideEffect key={index}>
                        <FlexWrapper align={"center"} justify={"space-around"}>
                            <div>
                                <StyledImage src={Image.url}/>
                            </div>
                            <FlexWrapper direction={"column"} justify={"center"}>
                                <h3>{Image.name}</h3>
                                <p>{Image.description}</p>
                                <span>More</span>
                            </FlexWrapper>
                        </FlexWrapper>
                    </SlideEffect>
                )
            })}
        </Slide>
    );
};

const StyledImage = styled.img`
    border-radius: 29px;
    width: 493px;
    height: 500px;
    object-fit: cover;
`

const SlideEffect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    max-width: 970px;
    border-radius: 29px;
    border-style: solid;
    border-color: transparent;
    border-width: 1px;
    background-color: gray;
    
`
const ButtonStyle = styled.button`
    box-sizing: border-box;
    background: linear-gradient(87.32deg, rgba(0, 196, 240, 1.00) 0%,rgba(226, 149, 0, 1.00) 100%);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    align-items: center;
`

const properties = {
    prevArrow: <ButtonStyle><Icon iconId='arrowLeft' width="36" height="36" viewBox="0 0 36 36" /></ButtonStyle>,
    nextArrow: <ButtonStyle><Icon iconId='arrowRight' width="36" height="36" viewBox="0 0 36 36" /></ButtonStyle>
}

