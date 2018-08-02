import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ];

const renderColorSelector = (props) => (
  <div>
    <select {...props.input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {props.meta.touched && props.meta.error && <span>{props.meta.error}</span>}
  </div>
);

class ThirdPage extends Component {
  onSubmit(values){
    this.props.onSubmit(values);
  }
  render(){
  const { handleSubmit, pristine, previousPage, submitting } = this.props;
  return (
    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector} />
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
};
export default reduxForm({
  form: 'AddBadge', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(ThirdPage);
