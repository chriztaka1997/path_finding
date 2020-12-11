import React, {Component} from 'react';
import node from './node/node';

import './visualizer.csx';

export default class Visualizer extends Component{
    constructor(props){
        super.props(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                foo
                <node></node>
            </div>
        );
    }


}