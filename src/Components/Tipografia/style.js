import styled from "styled-components";

export const Span = styled.span`
    color: ${props => props.color};
    font-family: ${props => props.font ? props.font : 'Nunito'};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight ? props.weight : 'regular'};
    
`