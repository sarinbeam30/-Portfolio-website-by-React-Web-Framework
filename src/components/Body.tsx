/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/**  IMPORT IMAGE */
import wallpaper_1 from '../Image/wallpaper-1.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/BodyStyleSheet.module.scss';

export default class Body extends Component {
    public render() {
        return (
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex={0}>
                <div className={styles.home_layout} id="home">
                    <img src={wallpaper_1} className={styles.wallpaper_1} />
                    <div className={styles.home_text}>Hi ! I'm Sarin Wanichwasin. (Beam)</div>
                    <div 
                </div>

                <div className={styles.home_layout} id="home">
                    <img src={wallpaper_1} className={styles.wallpaper_1} />
                    <div className={styles.home_text}>Hi ! I'm Sarin Wanichwasin. (Beam)</div>
                </div>
            </div>
        );
    }
}

// export default Body;
