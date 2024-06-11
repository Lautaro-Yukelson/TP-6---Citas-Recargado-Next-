'use client';

import React, { useState } from 'react';
import ListadoCitas from '../components/ListadoCitas/ListadoCitas';
import Form from '../components/Form/Form';
export default function Home() {
  const [citas, setCitas] = useState([]);

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <>
      <h1>Bienvenido a nuestra página de registro de citas veterinarias</h1>
      <p>
        En nuestra clínica, nos preocupamos por la salud y el bienestar de tus
        mascotas. Ofrecemos un servicio profesional y amable para ayudarte a
        mantener a tus peludos amigos felices y saludables.
      </p>
    </>
  );
}
