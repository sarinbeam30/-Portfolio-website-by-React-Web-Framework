/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT IMAGE */
import profile_image from '../Image/profile-picture.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/SideBarStyleSheet.module.scss';

const SideBarScroller = (props: { links: Array<{ name: string; to: string }> }) => {
    const { links } = props;
    const NavigationLinks: any = () =>
        links.map((link: { name: string; to: string }) => (
            <li key={link.name} className="p-2 bd-highlight align-items-md-center" style={{ listStyleType: 'none' }}>
                <a href={link.to}>{link.name}</a>
            </li>
        ));
    return (
        <nav id="navbar-scrollspy" className="bg-light h-100 position-fixed navbar navbar-light">
            <div className="d-flex flex-column bd-highlight mb-3">
                <a
                    className="navbar-brand d-flex flex-column align-items-md-center"
                    href="#"
                    style={{ marginRight: 0 }}
                >
                    <img src={profile_image} className={styles.profile_image} />
                    <div>Sarin Wanichwasin</div>
                    <div className={styles.role_descrption}>Software Engineering Student </div>
                </a>
                <nav className="nav nav-pills flex-column flex-grow-1 align-items-md-center">
                    <NavigationLinks />
                </nav>
            </div>
        </nav>
    );
};

export default SideBarScroller;
