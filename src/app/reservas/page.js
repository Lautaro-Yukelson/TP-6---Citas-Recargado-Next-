'use client';

import React, { useState } from 'react';
import ListadoCitas from '../../components/ListadoCitas/ListadoCitas';
import Form from '../../components/Form/Form';

export default function Home() {
  const [citas, setCitas] = useState([]);

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Form citas={citas} setCitas={setCitas} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </div>
  );
}
