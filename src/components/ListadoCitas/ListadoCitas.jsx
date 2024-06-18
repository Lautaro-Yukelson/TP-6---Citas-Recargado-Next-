import "./ListadoCitas.css";
import CardCita from "../CardCita/CardCita.jsx";

function ListadoCitas({ citas = [], eliminarCita }) {
  return (
    <>
      {citas.map((cita) => (
        <CardCita key={cita.id} data={cita} eliminarCita={eliminarCita} />
      ))}
    </>
  );
}

export default ListadoCitas;
