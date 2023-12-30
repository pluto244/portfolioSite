import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import myPhoto from "../../../../accerts/images/myPhoto.png"
import { theme } from "../../../../styles/Theme";
import { Icons } from "./Icons";

export const PhotoSection = () => {
    return (
    <FlexWrapper align={"center"}>
        <Icons/>
        <PhotoWrapper>
            <Photo src={myPhoto} />
        </PhotoWrapper>
        
    </FlexWrapper>
    );
}

const Photo = styled.img`
    width: 499px;
    height: 638px;
    object-fit: cover;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    &::before{
        content: "";
        height: 575px;
        width: 575px;
        border-radius: 50%;
        border: 67px solid  ${theme.colors.accent};
        box-shadow: 0px 0px 152px 0px ${theme.colors.accent};
        position: absolute;
        z-index: -1;
        top: 60px;
        left: -48px;
    }
`

