import React from 'react';
import {render} from 'react-dom';
import {NavBar} from './components/NavBar';
import  {SearchBox} from './components/SearchBox';
import {VideoDetails} from './components/VideoDetails';


class App extends React.Component {
    constructor(){
        super();
        this.state={
          InitialURL:"abc"
        };
    }
    render(){
        return(
          <div>
              <NavBar/>
              <div className="container">
                     <SearchBox InitURL={this.state.InitialURL} />
                     <VideoDetails/>
              </div>

          </div>
        );
    }
}


render(<App/>,window.document.getElementById("app"));
