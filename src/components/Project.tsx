import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { CarouselApp } from './Carousel/carousel-app';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/ProjectStyleSheet.module.scss';

/**  IMPORT IMAGE */
import IndoorPositioningSystemProjectImage_1 from '../Image/Project/IndoorPositioningSystemPeoject_1.png';
import IndoorPositioningSystemProjectImage_2 from '../Image/Project/IndoorPositioningSystemPeoject_2.png';
import IndoorPositioningSystemProjectImage_3 from '../Image/Project/IndoorPositioningSystemPeoject_3.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Project = (props: {
    ProjectArrayList: Array<{ image: string; label: string; caption: string; index: number }>;
}) => {
    const { ProjectArrayList } = props;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const ProjectArrayListLoop: any = () =>
        ProjectArrayList.map((project_array_list: { image: string; label: string; caption: string; index: number }) => (
            <div key={project_array_list.label.toString()} className={styles.image_carousel_layout}>
                <img src={project_array_list.image} className={styles.project_image} />
                <span>{project_array_list.label}</span>
                <span>{project_array_list.caption}</span>
            </div>
        ));

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-100-px"
        >

            <div className={styles.image_carousel_layout}>
                <span>Item 1</span>
                <img src={IndoorPositioningSystemProjectImage_1} className={styles.project_image} />
            </div>
            <div className={styles.image_carousel_layout}>
                <span>Item 2</span>
                <img src={IndoorPositioningSystemProjectImage_2} className={styles.project_image} />
            </div>
            <div className={styles.image_carousel_layout}>
                <span>Item 3</span>
                <img src={IndoorPositioningSystemProjectImage_3} className={styles.project_image} />
            </div>
        </Carousel>
    );
};

export default Project;
