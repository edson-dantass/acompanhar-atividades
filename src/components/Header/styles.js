import styled from "styled-components";

export const Container = styled.ul`
  position: fixed;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  background: rgba(28, 42, 98, 0.2);
  border-radius: 0px 0px 6px 6px;

  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  align-items: center;

  .search-container {
    position: relative;

    input[type="search"] {
      transition: 0.3s ease;
      border: solid transparent 2px;
      padding: 0.5em 0.5em 0.5em 2em;
      background: #e2e4e6;
      opacity: 0.85;
      border-radius: 6px;
      min-width: 20em;
      outline: none;
      color: #454c59;

      &:focus {
        border: solid #454c59 2px;
        background-color: #fff;
        opacity: 1;
      }
      &::placeholder {
        color: #454c59;
      }
    }
    svg {
      top: 0.5em;
      left: 0.5em;
      position: absolute;
      color: #454c59;
      z-index: 1;
    }
  }

  .actions-container {
    svg:nth-child(1) {
      margin-left: 0.5em;
    }
    svg {
      font-size: 1.5em;
      color: #fff;
    }
  }
`;
