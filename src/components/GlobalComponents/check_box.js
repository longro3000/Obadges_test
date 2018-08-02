import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';

export default class CheckboxGroup extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired
  };

  renderField = ({input, meta, options}) => {
    const {name, onChange, onBlur, onFocus} = input;
    const {touched, error} = meta;
    const inputValue = input.value;

    const checkboxes = options.map(({name}, index) => {
      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(name);
        }
        else {
          arr.splice(arr.indexOf(name), 1);
        }
        onBlur(arr);
        return onChange(arr);
      };

      const checked = inputValue.includes(name);

      return (
        <div>
        <label key={`checkbox-${index}`}>
          <input type="checkbox" name={`${name}[${index}]`} value={name} checked={checked} onChange={handleChange} onFocus={onFocus} />
          <span>{name}</span>
        </label>
        </div>
      );
    });

    return (
      <div>
        <div>{checkboxes}</div>
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };


  render() {
    return <Field {...this.props} type="checkbox" component={this.renderField} />;
  }
}
