/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component, ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Project from './Project';

/**  IMPORT IMAGE */
//import wallpaper_1 from '../Image/wallpaper-1.jpg';
import IndoorPositioningSystemProjectImage from '../Image/Project/IndoorPositioningSystemPeoject.png';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/BodyStyleSheet.module.scss';

const project_array_list = {
    ProjectArrayList: [
        {
            image: IndoorPositioningSystemProjectImage,
            label: 'Indoor Positioing System Project [Senior Project]',
            caption: 'It is a project which you can find your current position in defined area',
        },
    ],
};

export default class Body extends Component {
    public render(): ReactElement {
        const { ProjectArrayList } = project_array_list;
        return (
            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example3"
                data-bs-offset="0"
                tabIndex={0}
                className={styles.body}
            >
                <Home />
                <About />
                <Project ProjectArrayList={ProjectArrayList} />
            </div>
        );
    }
}
