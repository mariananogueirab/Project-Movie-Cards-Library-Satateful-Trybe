import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ () => console.log('teste1') } />
      </div>
    );
  }
}

export default MovieLibrary;
