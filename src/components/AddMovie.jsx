import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    /* const { onClick } = this.props; */
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          type="text"
          dataTestIdLabel="title-input-label"
          value={ title }
          dataTestIdInput="title-input"
          name="title"
          onChange={ this.handleInput }
          id="inputTitle"
          labelText="Título"
        />

        <Input
          type="text"
          dataTestIdLabel="subtitle-input-label"
          value={ subtitle }
          dataTestIdInput="subtitle-input"
          name="subtitle"
          onChange={ this.handleInput }
          id="inputSubtitle"
          labelText="Subtítulo"
        />

        <Input
          type="text"
          dataTestIdLabel="image-input-label"
          value={ imagePath }
          dataTestIdInput="image-input"
          name="imagePath"
          onChange={ this.handleInput }
          id="inputImage"
          labelText="Imagem"
        />

        <label data-testid="storyline-input-label" htmlFor="inputStoryline">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleInput }
            id="inputStoryline"
          />
        </label>

        <Input
          type="number"
          dataTestIdLabel="rating-input-label"
          value={ rating }
          dataTestIdInput="rating-input"
          name="rating"
          onChange={ this.handleInput }
          id="inputRating"
          labelText="Avaliação"
        />

      </form>
    );
  }
}

export default AddMovie;
