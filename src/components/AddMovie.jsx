import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    /* const { onClick } = this.props; */
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          <input
            value={ title }
            data-testid="title-input"
            id="inputTitle"
            name="title"
            onChange={ this.handleInput }
          />
        </label>

        <label htmlFor="inputSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="inputSubtitle"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleInput }
          />
        </label>

        <label data-testid="image-input-label" htmlFor="inputImage">
          Imagem
          <input
            id="inputImage"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleInput }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
