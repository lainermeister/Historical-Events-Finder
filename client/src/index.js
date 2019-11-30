import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Search from './components/Search.jsx'
import Results from './components/Results.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentResults: [],
            link: ""
        }
        this.queryHandler = this.queryHandler.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:3000/events?_page=1&_limit=20')
            .then((response) => this.setState({ currentResults: response.data, link: response.headers.link }))
    }

    queryHandler(event, query) {
        event.preventDefault();
        console.log("handling " + query)
    }
    render() {
        return <div>
            <Search queryHandler={this.queryHandler} />
            <Results currentResults={this.state.currentResults} />
        </div>


    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);


module.hot.accept();