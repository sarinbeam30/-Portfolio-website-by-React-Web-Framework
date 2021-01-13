import * as React from 'react';
import styled from 'styled-components';

const SConrainer = styled.div`
    align-items: center;
    display: flex;
`;

const STextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 10px;
`;

const SlideTwo = () => (
    <SConrainer>
        <STextWrapper>
            <h1>Header 2</h1>
            <p>A short paragaraph with some descriptive text.</p>
        </STextWrapper>
        <img src="https://via.placeholder.com/400/3D1D73/ffffff" />
    </SConrainer>
);

export default SlideTwo;
