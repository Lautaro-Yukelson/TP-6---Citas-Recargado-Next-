'use client';

import React, { useEffect, useState } from 'react';
import ListadoCitas from '../../components/ListadoCitas/ListadoCitas';
import Form from '../../components/Form/Form';

export default function Home() {
  const [citas, setCitas] = useState(() => {
    const localData = localStorage.getItem("citas");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
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
