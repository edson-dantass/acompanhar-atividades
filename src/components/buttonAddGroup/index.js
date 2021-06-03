import React from "react";
import { IoAdd } from "react-icons/io5";
import { Container } from "./style";
import { create, index } from "../../services/api";
import PainelContext from "../Painel/context";

const ButtonAddGroup = () => {
  const [button, setButton] = React.useState(true);
  const { setGroups } = React.useContext(PainelContext);

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

  async function handleKey(event) {
    // Verifica se a tecla apertada foi "Enter"
    if (event.which === 13) {
      // Verifica se campo de novo grupo está vazio
      if (inputRef?.current.value !== "") {
        await create("/grupo", {
          nome: inputRef?.current.value,
        });
        setButton(!button);
        handleClickAddGroup();
        inputRef.current.value = "";
        async function getGroups() {
          const response = await index("/grupos");
          if (response) {
            setGroups(response.data);
          }
        }
        getGroups();
      } else {
        setButton(!button);
        handleClickAddGroup();
      }
    }
  }
  return (
    <Container button={button}>
      <div className="field-title">
        <button onClick={handleClickAddGroup}>
          <div ref={buttonRef} className="button-field">
            <IoAdd /> Novo Grupo
          </div>
        </button>
        <input ref={inputRef} type="text" placeholder="Insira o título do grupo..." onKeyPress={handleKey} />
      </div>
    </Container>
  );
};

export default ButtonAddGroup;
