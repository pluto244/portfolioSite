import styled from "styled-components"
import { Icon } from "../icon/Icon"

export const Logo = () => {
    return (
        <StyledIcon href="">
            <Icon iconId="logo" width="65" height="48" viewBox="0 0 65 48" />
            <Icon iconId="pluto" width="60" height="14" viewBox="0 0 60 14" />
        </StyledIcon>
    )
}

const StyledIcon = styled.a`
    display: flex;
    align-items: center;
`
