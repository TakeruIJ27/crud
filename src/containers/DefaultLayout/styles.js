import styled from 'styled-components';
import { Switch } from '@blueprintjs/core';

export const StyledDefaultLayout = styled.div`
    & > header,
    & > main {
        width: calc(100% - 250px);
        margin-left: auto;
    }

    & > main {
        padding: 20px 40px;
    }

`;

export const StyledSwitch = styled(Switch)`
    margin: 0;
`;
