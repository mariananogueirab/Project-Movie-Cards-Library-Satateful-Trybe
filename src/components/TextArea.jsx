import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
