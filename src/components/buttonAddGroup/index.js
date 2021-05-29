import React from "react";
import { IoAdd } from "react-icons/io5";
import { Container } from "./style";

const ButtonAddGroup = () => {
  const [button, setButton] = React.useState(true);
  const inputRef = React.useRef();
  const buttonRef = React.useRef();

  function handleClickAddGroup() {
    if (button) {
      inputRef.current.style.display = "block";
      inputRef.current.focus();
      buttonRef.current.style.display = "none";
      setButton(!button);
    } else {
      inputRef.current.style.display = "none";
      buttonRef.current.style.display = "flex";
      setButton(!button);
    }
  }

  function handleKey(event) {
    if (event.which === 13) {
      console.log("O texto inserido foi: " + inputRef?.current.value);
      setButton(!button);
      handleClickAddGroup();
      inputRef.current.value = "";
    }
  }
  return (
    <Container button={button}>
      <button onClick={handleClickAddGroup}>
        <div ref={buttonRef} className="button-field">
          <IoAdd /> Novo Grupo
        </div>
        <input ref={inputRef} type="text" placeholder="Insira o título do grupo..." onKeyPress={handleKey} />
      </button>
    </Container>
  );
};

export default ButtonAddGroup;
