import React from 'react';

export class SearchBox extends React.Component{
    constructor(props){
        super();
        this.state = {
            videoURL : props.InitURL
        }
    }

    onHandleChange(event){
        this.setState({
            videoURL:event.target.value
        })
    }

    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <h5>Paste video url below</h5>
                        <div className="input-field col s6">
                            <input placeholder="Paste URL here" id="video_url" type="text" className="validate" onChange={(event)=>this.onHandleChange(event)} value={this.state.videoURL} />
                                <label htmlFor="video_url">Paste Here</label>
                            <button className="waves-effect waves-light btn">Submit</button>
                            <p>{this.state.videoURL}</p>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}