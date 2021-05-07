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
import IndoorPositioningSystemProjectImage_4 from '../Image/Project/IndoorPositioningSystemPeoject_4.png';
import IndoorPositioningSystemProjectImage_5 from '../Image/Project/IndoorPositioningSystemPeoject_5.png';
import IndoorPositioningSystemProjectImage_6 from '../Image/Project/IndoorPositioningSystemPeoject_6.png';
import IndoorPositioningSystemProjectImage_7 from '../Image/Project/IndoorPositioningSystemPeoject_7.png';
import TeamSoftwareProject_1 from '../Image/Project/TeamSoftwareProject_1.png';
import TeamSoftwareProject_2 from '../Image/Project/TeamSoftwareProject_2.png';
import TeamSoftwareProject_3 from '../Image/Project/TeamSoftwareProject_3.png';
import TeamSoftwareProject_4 from '../Image/Project/TeamSoftwareProject_4.png';
import WebProgrammingProject_1 from '../Image/Project/WebProgrammingProject_1.png';
import WebProgrammingProject_2 from '../Image/Project/WebProgrammingProject_2.png';
import WebProgrammingProject_3 from '../Image/Project/WebProgrammingProject_3.png';
import WebProgrammingProject_4 from '../Image/Project/WebProgrammingProject_4.png';
import WebProgrammingProject_5 from '../Image/Project/WebProgrammingProject_5.png';
import WebProgrammingProject_6 from '../Image/Project/WebProgrammingProject_6.png';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/BodyStyleSheet.module.scss';

const project_array_list = {
    ProjectArrayList: [
        {
            image: IndoorPositioningSystemProjectImage_1,
            label: 'Indoor Positioing System Project [Senior-Project] - 1',
            caption:
                'It is a project which you can find your current position in defined area. [Current Location Page {Prototype} ]',
            index: 1,
        },
        {
            image: IndoorPositioningSystemProjectImage_4,
            label: 'Indoor Positioing System Project [Senior-Project] - 1',
            caption:
                'It is a project which you can find your current position in defined area. [Current Location Page]',
            index: 2,
        },
        {
            image: IndoorPositioningSystemProjectImage_5,
            label: 'Indoor Positioing System Project [Senior-Project] - 2',
            caption: 'It is a project which you can find your current position in defined area.  [Profile Page]',
            index: 3,
        },
        {
            image: IndoorPositioningSystemProjectImage_6,
            label: 'Indoor Positioing System Project [Senior-Project] - 3',
            caption: 'It is a project which you can find your current position in defined area.  [Log History Page]',
            index: 4,
        },
        {
            image: TeamSoftwareProject_1,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 1',
            caption: 'It is a project which show the real-time quantity of water of each node. [Home Page]',
            index: 5,
        },
        {
            image: TeamSoftwareProject_2,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 2',
            caption: 'It is a project which show the real-time quantity of water of each node. [All_sensors Page]',
            index: 6,
        },
        {
            image: TeamSoftwareProject_3,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 3',
            caption:
                "It is a project which show the real-time quantity of water of each node. [Lat Krabang's sensor bar chart Page]",
            index: 7,
        },
        {
            image: TeamSoftwareProject_4,
            label: 'Water Level Monitoring System Project [Team-Software-Project] - 4',
            caption:
                "It is a project which show the real-time quantity of water of each node. [Lat Krabang's sensor table Page]",
            index: 8,
        },
        {
            image: WebProgrammingProject_1,
            label: 'Computer Online Shopping Website Project [Web-Programming-Project] - 1',
            caption: 'Online shopping website project was created from Django web framework. [Home Page]',
            index: 9,
        },
        {
            image: WebProgrammingProject_2,
            label: 'Computer Online Shopping Website Project [Web-Programming-Project] - 2',
            caption: 'Online shopping website project was created from Django web framework. [Promotion Page]',
            index: 10,
        },
        {
            image: WebProgrammingProject_3,
            label: 'Computer Online Shopping Website Project [Web-Programming-Project] - 3',
            caption: 'Online shopping website project was created from Django web framework. [New Arrival Page]',
            index: 11,
        },
        {
            image: WebProgrammingProject_4,
            label: 'Computer Online Shopping Website Project [Web-Programming-Project] - 4',
            caption: 'Online shopping website project was created from Django web framework. [Promotion Page]',
            index: 12,
        },
        {
            image: WebProgrammingProject_5,
            label: 'Computer Online Shopping Website Project [Web-Programming-Project] - 5',
            caption:
                'Online shopping website project was created from Django web framework. [Main Page --mobile version]',
            index: 13,
        },
        {
            image: WebProgrammingProject_6,
            label: 'Computer Online Shopping Website Project [Web-Programming-Project] - 6',
            caption:
                'Online shopping website project was created from Django web framework. [New Arrival Page --mobile version]',
            index: 14,
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
