import React, { Component, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT IMAGE */
// import wallpaper_1 from '../Image/wallpaper-1.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/ProjectStyleSheet.module.scss';

/** IMPORT FONTAWESOMEICON */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// library.add(fas);

import styled from 'styled-components';
import Carousel from './Carousel/Carousel';
import SlideOne from './Carousel/SlideOne';
import SlideTwo from './Carousel/SlideTwo';

const Project = (props: {
    ProjectArrayList: Array<{ image: string; label: string; caption: string; index: number }>;
}) => {
    const { ProjectArrayList } = props;

    // const ProjectArrayListLoop: any = () =>
    //     ProjectArrayList.map((project_array_list: { image: string; label: string; caption: string; index: number }) => (
    //         <div key={project_array_list.label.toString()} className={styles.mySlides} ref={active}>
    //             <img src={project_array_list.image} className={styles.image_setup} />
    //             <span>{project_array_list.label}</span>
    //             <span>{project_array_list.caption}</span>
    //         </div>
    //     ));

    // const CurrentSlideLoop: any = () =>
    //     ProjectArrayList.map((project_array_list: { image: string; label: string; caption: string; index: number }) => (
    //         <span
    //             key={project_array_list.label.toString()}
    //             className={styles.dot}
    //             onClick={() => currentSlide(project_array_list.index)}
    //         ></span>
    //     ));
    return (
        <div className={styles.project_layout} id="project">
            <span className={styles.project_Heading_1}>PROJECT</span>
            {/* <div className={styles.slideshow_container}>
                <ProjectArrayListLoop />
                <a className={styles.prev} onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className={styles.next} onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>

            <br></br>
            <div style={{ textAlign: 'center' }}>
                <CurrentSlideLoop />
            </div> */}
            <div>
                <Carousel>
                    <SlideOne />
                    <SlideTwo />
                </Carousel>
            </div>
        </div>
    );
};

export default Project;
