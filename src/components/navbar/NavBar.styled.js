import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const NavStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${({theme}) => theme.backgroundDarker};
    padding: 5px 0 0 0;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;

    &.${props => props.activeClassName} {
        color: ${({theme}) => theme.secondary};
        border-bottom: 3px solid ${({theme}) => theme.secondary};
    }
`;
