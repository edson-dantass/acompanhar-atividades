import styled from "styled-components";

export const Container = styled.div`
  background: #ebecf0;
  margin: 1em 1em 1em 0;
  padding: 0 0.5em;
  flex-shrink: 0;
  flex-basis: 332px;
  flex-grow: 0;
  border-radius: 6px;
  max-height: calc(100vh - 115px);
  height: fit-content;
  user-select: none;
  position: relative;

  &::before {
    content: "";
    width: 0.2em;
    height: 100%;
    border-radius: 0.5em;
    position: absolute;
    background: #ffffff33;
    right: -1.2em;
  }
  & + & {
    margin: 1em;
  }

  .group-header {
    padding: 1em 0.6em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .group-header-name {
      h2 {
        color: #7d7d80;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        ${(props) => props.inputName && `display: none;`}
      }
      input {
        background: #fff;
        border: solid #bebebe 2px;
        outline: none;
        border-radius: 4px;
        padding: 0.2em 0.5em;
        ${(props) =>
          !props.inputName &&
          `
          position: absolute;     
          appearance: none;
          border: none;
          width: 0;
          height: 0;
          padding: 0;
        `}
        ${(props) =>
          props.inputName &&
          `
           &:focus {
            border: solid #7e7e81 2px;
          }
        `}
      }
    }
    .group-header-actions {
      display: flex;
      align-items: center;
      align-self: flex-start;
      .action {
        background-color: transparent;
        padding: 0.2em;
        cursor: pointer;
        border-radius: 0.2em;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.25s;
        margin: 0 !important;

        &:hover {
          background: #dadada;
        }

        svg {
          font-size: 1.2em;
          color: #4f4f4f;
        }
        svg.red {
          color: #da3d3d;
        }
      }
    }
  }
  .group-body {
    min-height: 200px;
    padding: 0.5em;
    /* background: #d9dcff; */
    border-radius: 2px;
    overflow-y: auto;
    max-height: calc(100vh - 224px);

    /* Track */
    ::-webkit-scrollbar-track {
      background: #0000001c;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 1em;
      background: #00000035;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #838383;
    }
  }
  .group-footer {
    padding: 1em 0.6em;
    margin: 0 !important;

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
        margin-right: 0.5em;
        font-size: 1.4em;
        color: #7d7d80;
      }
    }
  }
`;
