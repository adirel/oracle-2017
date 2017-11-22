/**
 * Created by yarivkatz on 22/11/2017.
 */


import React from 'react';
import ReactDOM from 'react-dom';

class HelloComponent extends React.Component {
    render() {
        return <h1>hello world</h1>
    }
}

ReactDOM.render(<HelloComponent/>, document.getElementById('container'));

