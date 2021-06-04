import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: rgb(0 0 0 / 50%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    position: relative;
    overflow: hidden;
    margin-top: -5em;
    background-color: #fff;
    width: 30em;
    min-height: 200px;
    padding: 1em;
    border-radius: 0.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::before {
      content: "";
      width: 50em;
      height: 50em;
      border-radius: 100%;
      position: absolute;
      top: 170%;
      left: 195%;

      transform: translate(-50%, -50%);
      background-color: #53de74;
      transform-origin: center center;
      transition-duration: 0.5s;
    }
    &.anima-start::before {
      top: 50%;
      left: 50%;
      opacity: 1;
    }
    &.anima-end::before {
      top: 50%;
      left: 50%;
      opacity: 0;
    }
    &.anima-end-full::before {
      top: 170%;
      left: 195%;
      opacity: 0;
    }
    .modal-header {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        color: #4f4f4f;
      }

      .btn-close {
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
          color: #4f4f4f;
          font-size: 1.4em;
        }
      }
    }

    .modal-body {
      z-index: 1;
      margin: 1em 0;

      .input-field {
        margin: 0.8em 0;

        label {
          cursor: pointer;
          font-size: 0.9em;
          line-height: 1.6em;
          color: #4f4f4f;
        }
      }
      .input-field.checkbox {
        display: flex;
        align-items: center;
      }
      .checkbox-field {
        cursor: pointer;
        padding: 0.2em;

        svg {
          font-size: 1.4em;
          margin-right: 0.2em;
        }
        svg.checked {
          color: #3c45a3;
        }
      }
      input {
        transition: 0.25s;
        border: solid #bebebe 2px;
        outline: none;
        width: 100%;
        background: white;
        padding: 0.5em;
        border-radius: 4px;
        color: #4b4b4d;

        &:focus {
          border: solid #7a82de 2px;
        }
      }
    }
    .modal-footer {
      z-index: 1;
      align-self: flex-end;

      button {
        transition: 0.25s;
        outline: none;
        background: none;
        padding: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #7a82de;
        border-radius: 0.3em;
        color: #fff;
        cursor: pointer;

        &:hover {
          background: #3c45a3;
        }
        svg {
          margin-left: 0.5em;
          font-size: 1.4em;
        }
      }
      button.red {
        background: #da3d3d;
      }
    }
    .modal-footer.actions {
      display: flex;
      button {
        margin-left: 1em;
      }
    }
  }
`;
