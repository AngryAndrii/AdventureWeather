import styled from "styled-components";

export const StyledForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    row-gap: 10px;
  }
  label {
    font-size: 16px;
    font-weight: 500;
  }

  input,
  select {
    height: 40px;
    padding: 5px;
    border: 1px solid gray;
  }
  .star {
    color: red;
  }

  .submit-button {
    display: block;
    margin-left: auto;
    margin-right: 0;
    margin-top: 100px;
    width: 100px;
    height: 40px;
    background-color: #45c5f5;
  }
`;
