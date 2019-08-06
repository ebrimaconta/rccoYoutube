import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(' https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLcGgGxTXg8hOYtDKhDj5HaNqHVbUygCcK&key=AIzaSyBvt4DPKV2J91Osoon5VPBni_2-D4gysqA')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  renderData(){
    if(this.state.data){
      return this.state.data.items.map((name,index)=>
        {
          let href = `https://www.youtube.com/watch?v=${name.snippet.resourceId.videoId}`;
            return(
         <li key={index}>
          <a href={href} >
         <img src={name.snippet.thumbnails.default.url} />
          <div className="title">{name.snippet.title}</div>
          </a>
          </li>   
                 
            )
        });
    }
  }

  render() {
     return (
      <div >
        <h1 className="header">RCCO Youtube Page</h1>
        <ul   className="videos">
         {this.renderData()}
         </ul>
      </div>
    );
  }
}

export default App;
