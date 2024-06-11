import React, { useState } from "react";
import "./Form.css";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

function Form({ citas, setCitas }) {
  const [formData, setFormData] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const getProxId = () => {
    return citas.length > 0 ? citas[citas.length - 1].id + 1 : 1;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = getProxId();
    const nuevaCita = { id, ...formData };
    const nuevasCitas = [...citas, nuevaCita];
    setCitas(nuevasCitas);
    setFormData({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nombre Mascota"
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
          onChange={handleChange}
        />
        <FormInput
          label="Nombre Dueño"
          type="text"
          name="dueño"
          placeholder="Nombre dueño de la mascota"
          onChange={handleChange}
        />
        <FormInput
          label="Fecha"
          type="date"
          name="fecha"
          onChange={handleChange}
        />
        <FormInput
          label="Hora"
          type="time"
          name="hora"
          onChange={handleChange}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
        ></textarea>
        <Button
          clase="u-full-width button-primary"
          texto="Agregar Cita"
          type="submit"
        />
      </form>
    </>
  );
}

export default Form;
