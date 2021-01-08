/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';

/**  IMPORT IMAGE */
import wallpaper_1 from '../Image/wallpaper-1.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/BodyStyleSheet.module.scss';

export default class Body extends Component {
    public render() {
        return (
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex={0}>
                <Home />

            </div>
        );
    }
}

// export default Body;
