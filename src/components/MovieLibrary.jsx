import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    this.setState({
      searchText: target.value,
    });
    this.onSearchTextMovie();
  }

  /*   onSearchTextMovie = () => {
    const { searchText } = this.state;
    const { movies } = this.props;
    this.setState({
      movies: movies.find(({ title }) => title === searchText),
    });
  } */

  onBookmarkedChange = ({ target }) => {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    if (!bookmarkedOnly) {
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        bookmarkedOnly: value,
        movies: movies.filter(({ bookmarked }) => bookmarked === true),
      });
    } else {
      const value = target.type === 'checkbox' ? target.checked = false : target.value;
      this.setState({
        bookmarkedOnly: value,
        movies,
      });
    }
  }

  onSelectedGenreChange = ({ target }) => {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    if (!bookmarkedOnly && target.value === '') {
      this.setState({
        selectedGenre: target.value,
        movies,
      });
    } else if (bookmarkedOnly && target.value === '') {
      this.setState({
        selectedGenre: target.value,
        movies: movies.filter(({ bookmarked }) => bookmarked === true),
      });
    } else if (bookmarkedOnly && target.value !== '') {
      this.setState({
        selectedGenre: target.value,
        movies: movies.filter(({ bookmarked }) => bookmarked === true)
          .filter(({ genre }) => genre === target.value),
      });
    } else if (target.value !== '') {
      this.setState({
        selectedGenre: target.value,
        movies: movies.filter(({ genre }) => genre === target.value),
      });
    }
  } // tem que arrumar, quando volta pra todos não funciona

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ () => console.log('teste1') } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
