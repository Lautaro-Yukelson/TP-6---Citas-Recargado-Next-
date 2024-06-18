import "./Button.css";

function Button({ clase, texto, eliminarCita }) {
  return (
    <>
      <button className={clase} onClick={eliminarCita}>
        {texto}
      </button>
    </>
  );
}

export default Button;
