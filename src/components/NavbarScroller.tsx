/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

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
        </div>
    );
};

export default NavbarScroller;
