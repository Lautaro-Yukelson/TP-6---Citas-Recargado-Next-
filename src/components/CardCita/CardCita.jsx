import "./CardCita.css";
import Button from "../Button/Button";

function CardCita({
  data: { id, mascota, dueño, fecha, hora, sintomas },
  eliminarCita,
}) {
  const handleClickEliminar = () => {
    eliminarCita(id);
  };

  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{dueño}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <Button
        clase="button eliminar u-full-width"
        texto="Eliminar X"
        eliminarCita={handleClickEliminar}
      />
    </div>
  );
}

export default CardCita;
