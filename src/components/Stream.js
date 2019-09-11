import React, {Component} from 'react'

export default class Stream extends Component {
    render(){
        return (
            <iframe id='stream' title='stream' width="480" height="270" src="https://ustream.tv/embed/9408562" scrolling="no" allowFullScreen webkitallowfullscreen='true' frameBorder="0"></iframe>
        )
    }
}

