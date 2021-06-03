import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  padding: 1em 0;

  button {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: none;
    width: 100%;
    min-width: 280px;
    border-radius: 6px;
    padding: 0.5em;
    font-weight: 500;
    color: #ffffff;
    ${(props) => (props.button ? ` display:  block;` : ` display: none;`)}
    ${(props) => (props.button ? ` background: #17134e38;` : ` background: #fff;`)}

    outline: none;
    &:hover {
      ${(props) => (props.button ? ` background: #17134e59;` : ` background: #fff;`)}
    }

    .field-title {
    }
    .button-field {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    svg {
      font-size: 1.8em;
      margin-right: 0.2em;
    }
  }
  input {
    display: none;
    border: solid #7a82de 2px;
    outline: none;
    width: 100%;
    background: white;
    padding: 0.5em;
    border-radius: 4px;
    color: #4b4b4d;
  }
`;
