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

const Project = (props: { ProjectArrayList: Array<{ image: string; label: string; caption: string }> }) => {
    const { ProjectArrayList } = props;
    const ProjectArrayListLoop: any = () =>
        ProjectArrayList.map((project_array_list: { image: string; label: string; caption: string }) => (
            <div key={project_array_list.label} className="carousel-item active">
                <img src={project_array_list.image} className="d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{project_array_list.label}</h5>
                    <p>{project_array_list.caption}</p>
                </div>
            </div>
        ));
    return (
        <div className={styles.project_layout} id="project">
            <span className={styles.project_Heading_1}>PROJECT</span>
            <div className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
            </div>

            <div className="carousel-inner">
                <ProjectArrayListLoop />
            </div>
        </div>
    );
};

export default Project;
