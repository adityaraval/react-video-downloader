import React from 'react';

export class SearchBox extends React.Component{
    constructor(props) {
        super();
        this.state = {
            videoURL: props.InitURL
        }
    }


    onHandleChange(event){
        this.setState({
            videoURL:event.target.value
        })
    }

    onClickSubmit(){
        this.props.func(this.state.videoURL)
    }

    render(){
        var divStyle = {color:'#f50057'};
        return(
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <h5>Paste video url below</h5>
                        <div className="input-field col s12">
                            <input placeholder="Paste URL here" id="video_url" type="text" style={divStyle} className="validate" onChange={(event)=>this.onHandleChange(event)} value={this.state.videoURL} />
                                <label htmlFor="video_url" style={divStyle}>Paste Here</label>
                            <button onClick={()=>this.onClickSubmit()} className=" pink accent-3 btn">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}