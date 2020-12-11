import React, {Component} from 'react';
import node from './node/node';

import './visualizer.csx';

export default class visualizer extends Component{
    constructor(props){

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