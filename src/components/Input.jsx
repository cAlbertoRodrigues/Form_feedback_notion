import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledInput = styled(Field)`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

const Input = ({ label, ...props }) => (
  <InputContainer>
    {label && <label>{label}</label>}
    <StyledInput {...props} />
    <ErrorMessage name={props.name} component={ErrorText} />
  </InputContainer>
);

export default Input;
