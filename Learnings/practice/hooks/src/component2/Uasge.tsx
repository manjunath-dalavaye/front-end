import React from 'react';
import useForm from './UseForm';

const MyForm: React.FC = () => {
  const validate = (values: { [key: string]: string }) => {
    const errors: { [key: string]: string } = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) errors.email = 'Email is required';
    return errors;
  };

  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm({
    initialValues: { name: '', email: '' },
    validate,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
