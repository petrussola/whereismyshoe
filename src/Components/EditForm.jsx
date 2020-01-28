// DEPENDENCIES
import React from 'react';
import { Form, Field } from 'formik';

const EditForm = props => {
  return (
    <div>
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" />
        <label htmlFor="photo_url">Photo URL</label>
        <Field name="photo_url" />
        <label htmlFor="has_heels">Has heels?</label>
        <Field name="has_heels" type="checkbox" />
        <label htmlFor="is_boot">Is boot?</label>
        <Field name="is_boot" type="checkbox" />
        <label htmlFor="season">Season</label>
        <Field name="season" type="text" />
        <label htmlFor="style">Style</label>
        <Field name="style" type="text" />
        <button type="submit">Edit</button>
      </Form>
    </div>
  );
};

export default EditForm;
