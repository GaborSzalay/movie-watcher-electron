'use babel';

import React from 'react';

export default class VlcSetup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { vlcPath: false };
        this.handleVlcInputChange = this.handleVlcInputChange.bind(this);
    }


    handleVlcInputChange(event) {
        const filePath = event.nativeEvent.path[0].files[0].path;

        this.setState(() => ({
            vlcPath: filePath
        }));
    };

    render() {
        return (
            <div>
                <label >Select VLC player:</label>
                <input type="file" id="vlc-path" name="vlc-path" onChange={this.handleVlcInputChange}/><br />
                <span id="vlc-path-container">{this.state.vlcPath}</span>
            </div>
        );
    }
}