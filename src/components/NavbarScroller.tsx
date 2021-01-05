/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT IMAGE */
import profile_image from '../Image/profile-picture.jpg';

/** IMPORT SCSS FILE */
import styles from '../Stylesheet/NavbarScrollerStyleSheet.module.scss';

const NavbarScroller = (props: { brand: { name: string; to: string }; links: Array<{ name: string; to: string }> }) => {
    const { brand, links } = props;
    const NavLinks: any = () =>
        links.map((link: { name: string; to: string }) => (
            <li key={link.name} className="p-2 bd-highlight" style={{ listStyleType: 'none' }}>
                <a href={link.to}>{link.name}</a>
            </li>
        ));
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <div className="container-fluid">
                    <a href={brand.to}>{brand.name}</a>
                    <div className="d-flex">
                        <NavLinks />
                    </div>
                </div>
            </nav>
            <img src={profile_image} className={styles.profile_image} />
        </div>
    );
};

export default NavbarScroller;
