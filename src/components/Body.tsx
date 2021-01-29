/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component, ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Project from './Project'; 
import Contact from './Contact';

/**  IMPORT IMAGE */
import IndoorPositioningSystemProjectImage_1 from '../Image/Project/IndoorPositioningSystemPeoject_1.png';
import IndoorPositioningSystemProjectImage_2 from '../Image/Project/IndoorPositioningSystemPeoject_2.png';
import IndoorPositioningSystemProjectImage_3 from '../Image/Project/IndoorPositioningSystemPeoject_3.png';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/BodyStyleSheet.module.scss';

const project_array_list = {
    ProjectArrayList: [
        {
            image: IndoorPositioningSystemProjectImage_1,
            label: 'Indoor Positioing System Project [Senior Project] - 1',
            caption:
                'It is a project which you can find your current position in defined area. [Current Location Page]',
            index: 1,
        },
        {
            image: IndoorPositioningSystemProjectImage_2,
            label: 'Indoor Positioing System Project [Senior Project] - 2',
            caption:
                'It is a project which you can find your current position in defined area. [Current Location Page]',
            index: 2,
        },
        {
            image: IndoorPositioningSystemProjectImage_3,
            label: 'Indoor Positioing System Project [Senior Project] - 3',
            caption:
                'It is a project which you can find your current position in defined area. [Current Location Page]',
            index: 3,
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
                <Contact />
            </div>
        );
    }
}
