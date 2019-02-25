import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = styled(ReactRouterLink)`
    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
    }
`;

export default Link;
