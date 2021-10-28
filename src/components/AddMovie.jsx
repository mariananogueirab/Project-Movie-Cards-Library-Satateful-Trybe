import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';
import Select from './Select';
import Button from './Button';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
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
        <Select
          value={ genre }
          onChange={ this.handleInput }
        />
        <Button onClick={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
