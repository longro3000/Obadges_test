import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import ImageUpload from './image_upload';

class FirstPage extends Component {
  onSubmit(values){
      this.props.onSubmit();
      console.log(values);
  };
  render(){
    const { handleSubmit } = this.props;
  return (
    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <ImageUpload />
        <button type="submit" className="btn btn-primary">Next</button>
    </form>
  );
};
};
export default reduxForm({
  validate,
  form: 'AddBadge', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FirstPage);
