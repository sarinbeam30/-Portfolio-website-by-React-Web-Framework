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

class App extends Component {
    public render(): ReactElement {
        const { links } = navigation;
        return (
            // <div className="d-flex flex-row flex-nowrap">
            //     <SideBar links={links} />
            //     <div className="flex-grow-1 align-self-stretch">
            //         <Body />
            //     </div>
            // </div>

            <div className="container-fluid ml-0 mr-0 pr-0">
                <div className="row mr-0">
                    <div className="col-4 pl-0 pr-0">
                        <SideBar links={links} />
                    </div>
                    <div className="col-8 pl-0 pr-0 w-100">
                        <Body />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
