import React from 'react';
import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";
import CustomInput from "../../UI_components/CustomInput/CustomInput.jsx";

const renderField = (props) => {
  const { meta: {touched, error} } = props;
  return (
  <div>
      <CustomInput
          labelText={props.placeholder}
          id={touched && error ? 'error' : 'float'}
          inputProps={props.input}
          formControlProps={{
              fullWidth: true
          }}
        />
      {touched && error && <div className='text-help'>{error}</div>}
  </div>
);
};

export default renderField;
