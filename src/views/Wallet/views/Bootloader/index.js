/* @flow */

import React from 'react';
import styled from 'styled-components';
import { H1 } from 'components/Heading';
import P from 'components/Paragraph';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 35px 40px 35px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`;

const StyledP = styled(P)`
    padding: 0 0 15px 0;
    text-align: center;
`;

const Bootloader = () => (
    <Wrapper>
        <Row>
            <H1>Your device is in firmware update mode</H1>
            <StyledP>Please re-connect it</StyledP>
        </Row>
    </Wrapper>
);

export default Bootloader;
