import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { dataTestIdLabel,
      value,
      dataTestIdInput,
      name,
      onChange,
      labelText,
      type } = this.props;
    return (
      <label data-testid={ dataTestIdLabel } htmlFor={ name }>
        { labelText }
        <input
          type={ type }
          value={ value }
          data-testid={ dataTestIdInput }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  dataTestIdLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestIdInput: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputText;
