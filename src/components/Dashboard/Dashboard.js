import React, { Component } from 'react';
import LoginButton from '../Application/LoginButton';
import 'whatwg-fetch';
import axios from 'axios';

class Dashboard extends Component {
  
  constructor(props){
      super(props);
      
      this.state = {
          movies : []
      };
  }

  componentWillMount(){
      console.log("Show some loading image here.");
  }

  componentDidMount(){
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0ca81b60e0ccb82d9e38665f13b044f5')
        .then((response) => {
            this.setState({ movies: response.data.results || [] })
        })
        .catch((error) => {
            console.log(error);
        });
  }

  FetchMore = () => {
        this.setState({
            movies : []
        });
  }

  render() {
    return (
      <div className ="container">
        <LoginButton />
        <table className="table table-bordered tableStyle">
            <thead>
            <tr>
                <th>Movie Title</th>
                <th>Release Year</th>
                <th>Movie Poster</th>
                <th>Movie Overview</th>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.movies.map((index) => 
                        <tr key = {index.title}>
                            <td>{index.title}</td>
                            <td>{index.release_date}</td>
                            <td>{index.poster_path}</td>
                            <td>{index.overview}</td>
                        </tr>  
                    )
                }
            </tbody>
        </table>
        <button type="button" className = "btn btn-sm btn-primary" onClick={this.FetchMore}>Get More Movies</button>
        </div>
    );
  }
}

export default Dashboard;
