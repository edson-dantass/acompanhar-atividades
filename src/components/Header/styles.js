import styled from "styled-components";

export const Container = styled.ul`
  position: fixed;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  background: rgba(235, 236, 240, 0.5);
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
      border-radius: 4px;
      background: #fff;
      min-width: 20em;
      outline: none;
      color: #7d7d80;

      &:focus {
        border: solid #3a47d5 2px;
      }
      &::placeholder {
        color: #7d7d80;
      }
    }
    svg {
      top: 0.5em;
      left: 0.5em;
      position: absolute;
      color: #7d7d80;
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
