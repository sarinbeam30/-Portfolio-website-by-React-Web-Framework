/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT IMAGE */
import profile_image from '../Image/profile-picture.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/NavbarScrollerStyleSheet.module.scss';

const NavbarScroller = (props: { links: Array<{ name: string; to: string }> }) => {
    const { links } = props;
    const NavLinks: any = () =>
        links.map((link: { name: string; to: string }) => (
            <li key={link.name} className="p-2 bd-highlight align-items-md-center" style={{ listStyleType: 'none' }}>
                <a href={link.to}>{link.name}</a>
            </li>
        ));
    return (
        <div className="d-flex flex-row">
            <nav id="navbar-scrollspy" className="navbar navbar-light bg-light container-small">
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
                        <NavLinks />
                    </nav>
                </div>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex={0}>
                <h4 id="item-1">Item 1</h4>
                <p>Blaaaaa........</p>
            </div>
        </div>
    );
};

export default NavbarScroller;
