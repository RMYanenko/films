import React from 'react';
import { MoviesList } from "../components/MoviesList/MoviesList";

class Main extends React.Component {
    state = {
        moviesList: [],
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=9829198f&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({moviesList: data.Search}))
    }

    render() {

        const { moviesList} = this.state;

        return <main className="container content">
            {
                moviesList.length ?  ( <MoviesList moviesList={this.state.moviesList} />) : <h3>Loading...</h3>
            }
          
        </main>
    }
}

export {Main};