import React, { Component, Fragment, ReactElement } from 'react';
import SideBar from './components/SideBar';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.css';

const navigation = {
    // brand: { name: "Beam's Portfolio", to: '#' },
    links: [
        { name: 'HOME', to: '#home' },
        { name: 'ABOUT', to: '#about' },
        { name: 'PROJECT', to: '#project' },
        { name: 'CONTACT', to: '#contact' },
    ],
};

const project_array_list ={
    project_list : [
        { image: }
    ],
};

class App extends Component {
    public render(): ReactElement {
        const { links } = navigation;
        return (
            <div className="d-flex flex-row ">
                <div className="flex-fill">
                    <SideBar links={links} />
                </div>
                <div className="flex-grow-1">
                    <Body />
                </div>
            </div>
        );
    }
}

export default App;
