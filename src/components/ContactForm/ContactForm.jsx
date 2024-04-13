import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {useId} from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const phonebookSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('required'),
    number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('required')
})

export default function ContactForm({onAdd}) {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        };
        onAdd(newContact);
        actions.resetForm();
    }
    return(
        <Formik 
          initialValues={{
            name: '',
            number: ''
        }} 
          onSubmit={handleSubmit}
          validationSchema={phonebookSchema}>
            <Form className={css.form}>
                <div className={css.fieldWrapper}>
                    <div className={css.wrapper}>
                      <label className={css.label} htmlFor={nameFieldId}>Name</label>
                      <Field className={css.field} type='text' name='name' id={nameFieldId}/>
                      <ErrorMessage className={css.error} name='name' component='span'/>
                    </div>
                    <div className={css.wrapper}>
                      <label className={css.label} htmlFor={numberFieldId}>Number</label>
                      <Field className={css.field} type='text' name='number' id={numberFieldId}/>
                      <ErrorMessage className={css.error} name='number' component='span'/>
                    </div>
                </div>
                <button className={css.btn} type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
    
}