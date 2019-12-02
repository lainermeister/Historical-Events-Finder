import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import ReactPaginate from "react-paginate";

import Search from './components/Search.jsx'
import Results from './components/Results.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentResults: [],
            link: "",
            selectedPage: 1,
            totalPages: 0,
            totalEvents: 0,
            query: ""
        }
        this.url = "http://localhost:3000/events";
        this.perPage = 10;
        this.queryHandler = this.queryHandler.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this)
    }
    componentDidMount() {
        this.loadEventsFromServer()
    }

    loadEventsFromServer() {
        let requestUrl = `${this.url}?q=${this.state.query}&_page=${this.state.selectedPage}&_limit=${this.perPage}`;
        console.log(requestUrl)
        return axios.get(requestUrl)
            .then((response) => this.setState({
                currentResults: response.data,
                link: response.headers.link,
                totalEvents: Number(response.headers["x-total-count"]),
                totalPages: Math.ceil(Number(response.headers["x-total-count"]) / this.perPage)
            }))
    }

    queryHandler(event, query) {
        event.preventDefault();
        this.setState({ query: query, selectedPage: 1 }, () => this.loadEventsFromServer())

    }

    handlePageClick(data) {
        let selectedPage = Math.ceil(data.selected) + 1;

        this.setState({ selectedPage }, () => {
            window.scrollTo(0, 0)
            this.loadEventsFromServer();
        });
    };

    numEventsCalc() {
        const startingAt = (this.state.selectedPage - 1) * this.perPage + 1;
        const endingAt = this.state.selectedPage * this.perPage;
        return <div id="num-events">{`Items ${startingAt}-${endingAt} out of ${this.state.totalEvents}`}</div>
    }

    render() {
        return <div className="mx-auto" id="page-container">
            <h1>Historical Events</h1>

            <Search queryHandler={this.queryHandler} />
            {this.numEventsCalc()}
            <Results currentResults={this.state.currentResults} />
            <div id="react-paginate">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>

        </div>


    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);


module.hot.accept();