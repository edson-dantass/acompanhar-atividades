import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  color: #4b4b4d;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 100%;
  height: auto;
  padding: 0.8em 0.5em;
  cursor: grab;
  margin-bottom: 1em;

  .card-footer {
    margin-top: 1em;
    .tag-time {
      font-size: 0.9em;
      color: #fff;
      padding: 0.2em 0.5em;
      background: #7a82de;
      max-width: fit-content;
      border-radius: 4px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5em;
      }
    }
    .tag-time.red {
      background: #da3d3d;
    }
    .tag-time.green {
      background: #77d268;
    }
  }
`;
