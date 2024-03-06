import { useForm } from "../../hooks/useForm";


export const FormikBasic = () => {

    const {
        handleChange, 
        handleBlur, 
        handleSubmit, 
        errors, 
        touched, 
        values
    } = useForm({
        name: '',
        email: '',
      })
     
  

  return (
    <div>
      <h1>Formulario basico de Formik</h1>

      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && <span>{errors.name}</span>}
        </div>
        <div className='field'>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div className='field'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};