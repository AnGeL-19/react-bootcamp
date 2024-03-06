import { useFormik } from 'formik';


export const useForm = (initialValues) => {
    
    const validations = ({ name, email }) => {
        const errors = {};
    
        if (!name) {
          errors.name = 'required';
        } else if (name.length >= 15) {
          errors.name = 'Must be 15 characters or less';
        }
    
        if (!email) {
          errors.email = 'required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
          errors.email = 'Invalid email address';
        }
    
        return errors;
      };
    
      const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
        useFormik({
          initialValues,
          onSubmit: values => {
            console.log(values);
          },
          validate: validations,
        });


        return{
            handleChange,
            handleSubmit,
            values, 
            errors, 
            touched, 
            handleBlur
        }
}
