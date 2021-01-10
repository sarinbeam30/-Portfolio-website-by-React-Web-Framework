import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT ANIMATE.CSS LIBRARY */
// import Animate from 'animate.css-react';
// import 'animate.css/animate.css';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/AboutStyleSheet.module.scss';

export default class About extends Component {
    public render() {
        return (
            <div className={styles.about_layout} id="about">
                <span className={styles.about_Heading_1}>ABOUT ME</span>
                <span className={styles.about_Heading_2}>WHO AM I</span>
                <p className={styles.about_content}>
                    Hi I&apos;m Sarin Wanichwasin. At this moment, I&apos;m a forth-year student at KMITL. I&apos;m
                    study about Software Engineering (International Program). Now, I&apos;m interested in frontend
                    development, backend developemnt and Internet-Of-Things (IOT) stuff.
                </p>
            </div>
        );
    }
}
