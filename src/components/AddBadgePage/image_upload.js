import React, {Component} from 'react';
import {Field} from "redux-form";
import Dropzone from 'react-dropzone';
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";
import carouselStyle from '../../assets/jss/material-kit-react/views/componentsSections/carouselStyle';
import Button from '../../UI_components/CustomButtons/Button.jsx';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  let dropzoneRef;
  return (
    <div>
      <Dropzone
        ref={(node) => { dropzoneRef = node; }}
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
        style={{"margin": "auto", "width" : "25%", "textAlign":"center"}}
      >
        {(files.length != 0) ? <img src={field.input.value[0].preview}  width='100%'/> : <div>input some file</div>}
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
        <div className='UploadFile'>
        <Button color='primary' onClick={() => { dropzoneRef.open() }}>
        <CloudUploadIcon />
            Upload
          </Button>
        </div>
    </div>
  );
}

class ImageUpload extends Component {
      render()  {
          const { classes } = this.props;
          return (
            <div className={classes.section}>
              <div className={classes.container}>
                <GridContainer justify='center'>
                  <GridItem xs={12} sm={12} md={12}>
                  <Field
                      name='BadgeIcon'
                      component={renderDropzoneInput}
                    />
                  </GridItem>
                </GridContainer>
              </div>
              </div>
          );
      }
};

export default withStyles(carouselStyle)(ImageUpload);
