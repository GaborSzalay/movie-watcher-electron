'use babel';

import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/' replace>Home</Link></li>
                        <li><Link to='/vlc' replace>VLC setup</Link></li>
                        <li><Link to='/new-series' replace>New Series</Link></li>
                        <li><Link to='/watch-series' replace>Watch Series</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}