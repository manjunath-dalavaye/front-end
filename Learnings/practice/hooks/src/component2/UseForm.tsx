import { useState } from 'react';

interface FormState {
  [key: string]: string;
}

interface UseFormProps {
  initialValues: FormState;
  validate: (values: FormState) => Partial<FormState>;
}

const useForm = ({ initialValues, validate }: UseFormProps) => {
  const [values, setValues] = useState<FormState>(initialValues);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prevTouched) => new Set(prevTouched).add(e.target.name));
    setErrors(validate(values));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
    }
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
