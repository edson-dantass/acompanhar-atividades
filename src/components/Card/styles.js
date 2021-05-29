import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: #4b4b4d;
  box-shadow: 0px 6px 6px rgb(0 0 0 / 5%);
  border-radius: 4px;
  width: 300px;
  height: auto;
  padding: 0.8em 0.5em;
  cursor: grab;
  appearance: none;
  position: relative;
  user-select: none;
  -webkit-user-drag: element !important;
  border: solid transparent 2px;
  transition: all 0.2s;

  ${(props) => props.isDragging && ` box-shadow:none; background-color: #ebecf0; border: dashed 2px #b3b3b3;`}
  margin-bottom: 1em;
  .card-body {
    ${(props) => props.isDragging && `opacity: 0;`}
  }
  .card-footer {
    ${(props) => props.isDragging && `opacity: 0;`}
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
