import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT IMAGE */
import wallpaper_1 from '../Image/wallpaper-1.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/HomeStyleSheet.module.scss';

/** IMPORT FONTAWESOMEICON */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default class Home extends Component {
    public render() {
        return (
            <div className={styles.home_layout} id="home">
                <img src={wallpaper_1} className={styles.wallpaper_1} />
                <div className={styles.home_text_layout}>
                    <h2 className={styles.home_text}>Hi </h2>
                    <h2 className={styles.home_text}>I&apos;m</h2>
                    <h2 className={styles.home_text}>Sarin Wanichwasin (Beam)</h2>
                    <p>
                        <button type="button" className="btn btn-outline-dark mt-4">
                            DOWNLOAD_CV
                            <FontAwesomeIcon className="ml-3" icon={['fas', 'file-download']} />
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}
