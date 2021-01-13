import * as React from 'react';
import styled, { css } from 'styled-components';

const SCarouselWrapper = styled.div`
    display: flex;
`;

interface ICarouselSlide {
    active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
    flex: 0 0 auto;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: all 0.5s ease;
    width: 100;
`;

interface IProps {
    children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const activeSlide = children.map((slide, index) => (
        <SCarouselSlide active={currentSlide === index} key={index}>
            {slide}
        </SCarouselSlide>
    ));

    return (
        <div>
            <SCarouselWrapper>{activeSlide}</SCarouselWrapper>
        </div>
    );
};

export default Carousel;
