import React, { Component, createRef, ReactElement, useRef, useState } from 'react';
import SideBar from './components/SideBar';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.css';

/** IMPORT SCSS FILE */
import styles from './Stylesheet/AppStyleSheet.module.scss';

import { motion, useCycle } from 'framer-motion';

// const { motion, useMotionValue } = Motion;

const navigation = {
    // brand: { name: "Beam's Portfolio", to: '#' },
    links: [
        { name: 'HOME', to: '#home' },
        { name: 'ABOUT', to: '#about' },
        { name: 'PROJECT', to: '#project' },
        { name: 'CONTACT', to: '#contact' },
    ],
};

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sidebarOpen: false,
        };
    }

    handleViewSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    };

    public render(): ReactElement {
        const { links } = navigation;
        return (
            <div className="container-fluid ml-0 mr-0 pr-0">
                <div className="row mr-0">
                    <div className="col-4 px-0">
                        <SideBar links={links} />
                    </div>
                    <div className="px-0 w-100">
                        <Body />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
