// DEPENDENCIES
import React, { useContext } from 'react';
import { Formik } from 'formik';

// COMPONENTS
import EditForm from '../Components/EditForm';

// CONTEXT
import ShoesContext from '../Contexts/ShoesContext';

// HELPERS
import db from '../config/firebase';

const EditShoe = ({ history, match }) => {
  const { editedShoe, changeFetchDataBoolean } = useContext(ShoesContext);
  const initialValues = editedShoe.data();
  const handleSubmit = values => {
    db.collection('shoes')
      .doc(match.params.shoeId)
      .update(values)
      .then(doc => {
        changeFetchDataBoolean(true);
        history.push('/');
      });
  };
  return (
    <div>
      <h1>Edit shoe form:</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={EditForm}
      />
    </div>
  );
};

export default EditShoe;
