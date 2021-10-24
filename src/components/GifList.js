import React from 'react';

class GifList extends React.Component {
    render() {
        return (
          <ul>
              {this.props.gifs.map(gif => {
                  console.log(gif.url)
                  return <li><img href={gif.url} alt="gif"/></li>
                })
              }
          </ul>
        )
    }
}

export default GifList;