import { Button, TextField } from '@mui/material';
import styles from './AddUser.module.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { createEmployee } from '../services/employees.service';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const validationSchema = yup.object().shape({
  name: yup.string().min(2).max(50).required(),
  email: yup.string().email(),
  jobTitle: yup.string().required().max(40),
});

export function AddUser() {
  const [isAdding, setIsAdding] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      jobTitle: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsAdding(true);
      setShowError(false);
      setShowSuccess(false);

      createEmployee(values)
        .then(() => {
          setIsAdding(false);
          setShowSuccess(true);
        })
        .catch(() => {
          setShowError(true);
          setIsAdding(false);
        });
    },
  });

  return (
    <>
      <h1>Add User Works</h1>

      {showError && <p>Error while adding user</p>}
      {showSuccess && (
        <p>
          Employee has been added! Go to <Link to="/">list</Link>
        </p>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          className={styles['form-control']}
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          name="name"
          label="Name"
          fullWidth
        />
        <TextField
          className={styles['form-control']}
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          name="email"
          label="Email"
          fullWidth
          type="email"
        />
        <TextField
          className={styles['form-control']}
          variant="outlined"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
          name="jobTitle"
          label="Job Title"
          fullWidth
        />

        <Button variant="contained" type="submit" disabled={isAdding}>
          Add
        </Button>
      </form>
    </>
  );
}
