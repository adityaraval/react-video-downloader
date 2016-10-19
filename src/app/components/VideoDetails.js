import React from 'react';
var _ = require('lodash');
export class VideoDetails extends React.Component{

    constructor(props) {
        super();
        this.state = {
            v_data:props.data,
            v_url:props.newURL
        }
    }
    render(){
        var divStyle1 = {color:'#0d47a1'};
        return(
            <ul className="collection">
                <pre><b style={divStyle1}> Video URL:</b>{ this.props.newURL ?
                    this.props.newURL :
                    <span>No URL</span> }</pre>

                <pre><b style={divStyle1}> Video Title:</b>{ this.props.data ?
                                    this.props.data.data.title:
                    <span>No Title</span> }</pre>

                <pre><b style={divStyle1}> Download Links:</b>{ this.props.data ?
                        this.props.data.data.formats.map(function(listValue,i){
                            return <li className="collection-item avatar" key={i}>
                                <p>Ext::{listValue.container}<br />
                                    Res::{listValue.resolution}
                                </p>
                                <a href={listValue.url} className="secondary-content">
                                    <i className="material-icons">send</i>
                                </a>
                            </li>;
                        }) :
                    <span></span>}</pre>
            </ul>
        );
    }
}