import { useState } from 'react';
import { Form, Formik } from "formik";
import Input from "../components/Input";
import { RatingSlider } from "../components/RatingSlider";
import * as Yup from "yup";
import styled from "styled-components";
import React from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  const initialValues = {
    nomeCompleto: "",
    email: "",
    feedback: "",
    rating: 0,
  };

  const validationSchema = Yup.object({
    nomeCompleto: Yup.string()
      .min(3, "O campo deve ter no mínimo 3 caracteres")
      .required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    feedback: Yup.string().required("Campo obrigatório"),
    rating: Yup.number()
      .min(0, "A avaliação deve ser pelo menos 0")
      .max(10, "A avaliação não pode ser maior que 10")
      .required("Campo obrigatório"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:3000/submit-form', values);
      setMessage('Feedback enviado com sucesso!');
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setMessage('Erro ao enviar os dados.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Content>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form style={{ width: "90%" }}>
              <Row>
                <label htmlFor="nomeCompleto">Nome Completo</label>
                <Input id="nomeCompleto" name="nomeCompleto" required autoComplete="name" />
              </Row>

              <Row>
                <label htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </Row>

              <Row>
                <label htmlFor="feedback">Feedback</label>
                <Input id="feedback" name="feedback" type="textarea" required autoComplete="off" />
              </Row>

              <Row>
                <RatingSlider onChange={(value) => setFieldValue('rating', value)} />
              </Row>

              <Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Enviar
                </Button>
              </Footer>
            </Form>
          )}
        </Formik>
        {message && <p>{message}</p>}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 550px) {
    display: block;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: #0081cf;
  color: white;
  border: none;
  border-radius: 5px;
`;

export default App;
