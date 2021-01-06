import React, { Component } from 'react';
import 'reset-css';
import NavbarScroller from './components/NavbarScroller';

const navigation = {
    // brand: { name: "Beam's Portfolio", to: '#' },
    links: [
        { name: 'HOME', to: '#item-1' },
        { name: 'ABOUT', to: '#item-2' },
        { name: 'WORK', to: '#item-3' },
        { name: 'CONTACT', to: '#item-4' },
    ],
};

class App extends Component {
    public render() {
        const { links } = navigation;
        return (
            <div className="App">
                <NavbarScroller links={links} />
            </div>
        );
    }
}

export default App;
