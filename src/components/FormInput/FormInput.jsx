import "./FormInput.css";

function FormInput(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        className="u-full-width"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default FormInput;
