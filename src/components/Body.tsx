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
import TeamSoftwareProject_1 from '../Image/Project/TeamSoftwareProject_1.png';
import TeamSoftwareProject_2 from '../Image/Project/TeamSoftwareProject_2.png';
import TeamSoftwareProject_3 from '../Image/Project/TeamSoftwareProject_3.png';
import TeamSoftwareProject_4 from '../Image/Project/TeamSoftwareProject_4.png';

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
            caption: 'It is a project which you can find your current position in defined area.  [Floor Plan Page]',
            index: 2,
        },
        {
            image: IndoorPositioningSystemProjectImage_3,
            label: 'Indoor Positioing System Project [Senior Project] - 3',
            caption: 'It is a project which you can find your current position in defined area.  [Time-line Page]',
            index: 3,
        },
        {
            image: TeamSoftwareProject_1,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 1',
            caption: 'It is a project which show the real-time quantity of water of each node. [Home Page]',
            index: 4,
        },
        {
            image: TeamSoftwareProject_2,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 2',
            caption: 'It is a project which show the real-time quantity of water of each node. [Home Page]',
            index: 5,
        },
        {
            image: TeamSoftwareProject_3,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 3',
            caption: 'It is a project which show the real-time quantity of water of each node. [Home Page]',
            index: 6,
        },
        {
            image: TeamSoftwareProject_4,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 4',
            caption: 'It is a project which show the real-time quantity of water of each node. [Home Page]',
            index: 7,
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
