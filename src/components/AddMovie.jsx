import React from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';

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
        <InputText
          type="text"
          dataTestIdLabel="title-input-label"
          value={ title }
          dataTestIdInput="title-input"
          name="title"
          onChange={ this.handleInput }
          labelText="Título"
        />

        <InputText
          type="text"
          dataTestIdLabel="subtitle-input-label"
          value={ subtitle }
          dataTestIdInput="subtitle-input"
          name="subtitle"
          onChange={ this.handleInput }
          labelText="Subtítulo"
        />

        <InputText
          type="text"
          dataTestIdLabel="image-input-label"
          value={ imagePath }
          dataTestIdInput="image-input"
          name="imagePath"
          onChange={ this.handleInput }
          labelText="Imagem"
        />

        <TextArea value={ storyline } onChange={ this.handleInput } />

        <InputNumber
          value={ rating }
          onChange={ this.handleInput }
        />

      </form>
    );
  }
}

export default AddMovie;
