import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  overflow-x: auto;
  padding: 60px 2em 0 2em;
`;

export const Column = styled.div`
  background: #ebecf0;
  width: 300px;
  margin: 1em 0em;
  padding: 0 0.5em;
  flex-shrink: 0;
  flex-basis: 300px;
  flex-grow: 0;
  border-radius: 6px;

  & + & {
    margin-left: 2em;
  }
`;
