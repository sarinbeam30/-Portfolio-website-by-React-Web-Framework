import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/ContactStyleSheet.module.scss';

export default class Contact extends Component {
    public render() {
        return (
            <div className={styles.contact_layout} id="contact">
                <span className={styles.contact_Heading_1}>GET IN TOUCH</span>
                <span className={styles.contact_Heading_2}>CONTACT</span>
                <div className={styles.contact_map_group}>TEST</div>
            </div>
        );
    }
}
