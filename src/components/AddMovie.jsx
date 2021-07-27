import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleInputTitle = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    /* const { onClick } = this.props; */
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          <input
            value={ title }
            data-testid="title-input"
            id="inputTitle"
            name="title"
            onChange={ this.handleInputTitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;