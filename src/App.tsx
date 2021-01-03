import React, { Component } from 'react';
import 'reset-css';
import NavbarScroller from './components/NavbarScroller';

const navigation = {
    brand: { name: 'Beam\'s Portfolio', to: '/' },
    links: [
        { name: 'HOME', to: '/home' },
        { name: 'ABOUT', to: '/about' },
        { name: 'WORK', to: '/work' },
        { name: 'CONTACT', to: '/contact' },
    ],
};

class App extends Component {
    public render() {
        const { brand, links } = navigation;
        return (
            <div className="App">
                <NavbarScroller brand={brand} links={links} />
            </div>
        );
    }
}

export default App;
