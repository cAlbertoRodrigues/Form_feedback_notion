import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const FeedbackForm = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/submit-form', values);
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <Formik
      initialValues={{ nomeCompleto: '', email: '', feedback: '', rating: 0 }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Field name="nomeCompleto" placeholder="Nome Completo" required />
          <Field name="email" placeholder="Email" type="email" required />
          <Field name="feedback" placeholder="Feedback" required />
          <Field name="rating" type="number" placeholder="Nota" required />
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
