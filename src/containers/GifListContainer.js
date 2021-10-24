import React from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

class GifListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            queryParam: "dolphin"
        };
    };
    
    componentDidMount() {
        console.log("component mounted")
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.queryParam}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(gifData => {
            const gifArray = gifData.data;
            this.setState({
                gifs: gifArray.slice(0, 3)
            })
        })
    }

    handleQuery = (event) => {
        console.log('handleQuery was hit')
        event.preventDefault();
        this.setState({
            queryParam: event.target.queryParam.value
        })
    }

    handleChange = (event) => {
        this.setState({
            queryParam: event.target.value
        })

    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch 
                  handleQuery={this.handleQuery}
                  queryParam={this.state.queryParam}
                  handleChange={this.handleChange}
                />
            </div>
        )
    }


}

export default GifListContainer;