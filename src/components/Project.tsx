import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT IMAGE */
import wallpaper_1 from '../Image/wallpaper-1.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/ProjectStyleSheet.module.scss';

/** IMPORT FONTAWESOMEICON */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface Props {
    children: React.ReactChildren;
}

const Project = (props: { ProjectArrayList: Array<{ image: string; label: string; caption: string }> }) => {
    const { ProjectArrayList } = props;
    const ProjectArrayListLoop: any = () =>
        ProjectArrayList.map((project_array_list: { image: string; label: string; caption: string }) => (
            <div key={project_array_list.label.toString()} className="carousel-item active">
                <img src={project_array_list.image} className="w-50 h-50" />
                <div className="carousel-caption d-none d-md-block mt-5">
                    <h5 className="text-white bg-dark mt-5">{project_array_list.label}</h5>
                    <p className="text-white bg-dark mt-5">{project_array_list.caption}</p>
                </div>
            </div>

            // <div key={project_array_list.label.toString()}>
            //     <img src={project_array_list.image} />
            //     <h6 className="legend">{project_array_list.label}</h6>
            // </div>
        ));
    return (
        <div className={styles.project_layout} id="project">
            <span className={styles.project_Heading_1}>PROJECT</span>
            <div className="carousel slide mt-3" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
            </div>

            <div className="carousel-inner">
                <ProjectArrayListLoop />
            </div>

            {/* <a
                className="carousel-control-prev mr-3 text-white bg-dark d-block"
                href="#carouselExampleCaptions"
                role="button"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>

            <a
                className="carousel-control-next ml-3 text-white bg-dark"
                href="#carouselExampleCaptions"
                role="button"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a> */}

        </div>
    );
};

export default Project;
