import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 1em 0 !important;
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
  background: #fff;
  ${(props) => props.isDragging && ` box-shadow:none; background-color: #ebecf0; border: dashed 2px #b3b3b3;`}

  .card-body {
    ${(props) => (props.cardSuccess ? "  color: #9e9e9e; text-decoration: line-through;" : "color: #4b4b4d;")}
    ${(props) => props.isDragging && `opacity: 0;`}
  }

  .card-footer {
    ${(props) => props.isDragging && `opacity: 0;`}
    margin-top: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6 {
      text-transform: uppercase;
      color: #9e9e9e;
      font-weight: 600;
      display: flex;
      align-items: center;

      svg {
        font-size: 1.5em;
      }
    }
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
      background: #63af57;
    }
  }
`;
