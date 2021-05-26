import styled from "styled-components";

export const Container = styled.div`
  background: #ebecf0;
  margin: 1em 0em;
  padding: 0 0.5em;
  flex-shrink: 0;
  flex-basis: 320px;
  flex-grow: 0;
  border-radius: 6px;
  max-height: calc(100vh - 120px);
  height: fit-content;

  & + & {
    margin-left: 2em;
  }

  .column-header {
    padding: 1em 0.6em;
    h2 {
      color: #7d7d80;

      font-style: normal;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .column-body {
    padding: 0 0.5em;
    overflow-y: auto;
    max-height: calc(100vh - 224px);
  }
  .column-footer {
    padding: 1em 0.6em;

    button {
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #7d7d80;
      font-weight: 500;
      font-size: 0.9em;
      cursor: pointer;
      outline: none;
      padding: 2px;
      transition: 0.25s;
      border-radius: 2px;

      &:hover {
        background: #dadada;
      }

      svg {
        margin-left: 0.5em;
        font-size: 1.4em;
        color: #7d7d80;
      }
    }
  }
`;
