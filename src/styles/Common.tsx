import { theme } from "./Theme";

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    height?: number;
    Fmax: number
}

export const font = ({family, weight, color, height, Fmax}: FontPropsType) =>
`
    font-family: ${family || "'Montserrat-Bold', sans-serif"}; 
    font-weight: ${weight || 400};
    color: ${color || theme.colors.descFont}; 
    line-height: ${height || 1.2};
    font-size: calc((100vw - 360px)/(1220 - 360) *(${Fmax} - ${Fmax/2}) + ${Fmax/2}px);
`