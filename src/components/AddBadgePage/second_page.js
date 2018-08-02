import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const renderError = props => props.meta.touched && props.meta.error ? <span>{props.meta.error}</span> : false;

class SecondPage extends Component {
  onSubmit(){
    this.props.onSubmit();
  }
  render(){
  const { handleSubmit, previousPage } = this.props;
  return (
    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};
};
export default reduxForm({
  validate,
  form: 'AddBadge', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(SecondPage);
