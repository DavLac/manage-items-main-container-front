import styled from 'styled-components';

export const ToggleTheme = styled.a`
    position: absolute;
    right: 15px;
    top: 15px;
    size: 100px;
  
    &:hover {
        color: ${({theme}) => theme.secondary};
    }
`;
