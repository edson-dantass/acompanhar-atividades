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
    margin-top: -5em;
    background-color: #fff;
    width: 30em;
    min-height: 200px;
    padding: 1em;
    border-radius: 0.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .modal-header {
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
    }
  }
`;
