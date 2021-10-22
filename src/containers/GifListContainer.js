import React from 'react';

class GifListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        };
    };
    
    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g")
        .then(response => response.json())
        .then(gifData => this.setState({
            gifs: gifData.slice(0, 3)
        })
    }

    render() {
        return <GifList />
    }


}

export default GifListContainer;