import React, { Component, Fragment, ReactElement } from 'react';
import 'reset-css';
import SideBar from './components/SideBar';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.css';

const navigation = {
    // brand: { name: "Beam's Portfolio", to: '#' },
    links: [
        { name: 'HOME', to: '#home' },
        { name: 'ABOUT', to: '#item-2' },
        { name: 'WORK', to: '#item-3' },
        { name: 'CONTACT', to: '#item-4' },
    ],
};

class App extends Component {
    public render(): ReactElement {
        const { links } = navigation;
        return (
            <div className="d-flex flex-row">
                <SideBar links={links} />
                <Body />
            </div>
        );
    }
}

export default App;
