import React from 'react';

class GifSearch extends React.Component {
    render() {
        return (
            <form onSubmit={event => this.props.handleQuery(event)}> 
                <input type="text" name="queryParam" value={this.props.queryParam} onChange={(event) => this.props.handleChange(event)}></input>
                <input type="submit" value="Search for gif" ></input>
            </form>
        )
    }
}

export default GifSearch;