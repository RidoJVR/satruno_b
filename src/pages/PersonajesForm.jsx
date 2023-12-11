import React, { useState } from 'react';
import { route } from '../utils/route'
import '../styles/PersonajesForm.css'

const MyForm = () => {
  const [nombre, setNombre] = useState('');
  const [sector, setSector] = useState('');
  const [especie, setEspecie] = useState('');
  const [genero, setGenero] = useState('');
  const [puedeVolar, setPuedeVolar] = useState(false);
  const [caracteristicas, setCaracteristicas] = useState('');
  const [archivo, setArchivo] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('sector', sector);
    formData.append('especie', especie);
    formData.append('genero', genero);
    formData.append('puede_volar', puedeVolar);
    formData.append('caracteristicas', caracteristicas);
    formData.append('file', archivo);

    try {
      const response = await fetch(`${route}folders/addFile/personajes`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File added successfully');
        // Puedes realizar acciones adicionales aquí después de que se haya agregado el archivo.
      } else {
        console.error('Error adding file');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setArchivo(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Otros campos de entrada ... */}
      <label htmlFor="nombre">Nombre:</label>
    <input className='hey' type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
    <br/><br/>
    <label htmlFor="sector">Sector:</label>
    <input className='hey' type="text" id="sector" name="sector" value={sector} onChange={(e) => setSector(e.target.value)} required />
    <br/><br/>
    <label htmlFor="especie">Especie:</label>
    <input className='hey' type="text" id="especie" name="especie" value={especie} onChange={(e) => setEspecie(e.target.value)} required />
    <br/><br/>
    <label htmlFor="genero">Género:</label>
    <input className='hey' type="text" id="genero" name="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required />
    <br/><br/>
    <label>
      Puede Volar:
      <input type="checkbox" checked={puedeVolar} onChange={() => setPuedeVolar(!puedeVolar)} />
    </label>
    <br/><br/>
    <label htmlFor="caracteristicas">Características:</label>
    <textarea className='texta' id="caracteristicas" name="caracteristicas" value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} required></textarea>
    <br/><br/>
      <label>
        Archivo:
        <input type="file" onChange={handleFileChange} />
      </label>
      <br /><br/>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
