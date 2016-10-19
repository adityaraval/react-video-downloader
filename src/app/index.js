import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
import  {SearchBox} from './components/SearchBox';
import {VideoDetails} from './components/VideoDetails';

class App extends React.Component {
    constructor(){
        super();
        this.state={
          InitialURL:"",
            data:null,
            newURL:""
        };
    }

    onSubmitAction(url){
        this.setState({
           newURL:url,
        });
        var apiURL = 'http://app-ytd-api.herokuapp.com/get?video_url='+url;
        console.log(apiURL);
        $.ajax({
            url: apiURL,
            type:'GET',
            dataType: 'json',
            cache:false,
            success:function (data) {
                this.setState({data:data});
                //console.log("ajax req",this.state.data);
            }.bind(this),
            error:function (error) {
                console.error(error.toString());
            }.bind(this)
        });
    }
    render(){
        return(
          <div>
              <NavBar/>
              <div className="container">
                     <SearchBox InitURL={this.state.InitialURL} func={this.onSubmitAction.bind(this)}  />
                     <VideoDetails newURL={this.state.newURL} data={this.state.data} />
              </div>
              <Footer/>
          </div>
        );
    }
}


render(<App/>,window.document.getElementById("app"));
