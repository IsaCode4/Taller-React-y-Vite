// src/FormRegistro.js
import { useState } from "react";

function FormRegistro() {
  // Estado para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [programa, setPrograma] = useState("Ingeniería de Sistemas");
  const [semestre, setSemestre] = useState("");

  // Estado de la UI
  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState({});

  // Función de validación
  const validar = () => {
    const nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!correo.trim()) nuevosErrores.correo = "El correo es obligatorio";
    if (!correo.includes("@"))
      nuevosErrores.correo = "El correo debe contener @";
    if (!semestre) nuevosErrores.semestre = "El semestre es obligatorio";
    if (semestre < 1 || semestre > 10)
      nuevosErrores.semestre = "El semestre debe estar entre 1 y 10";
    return nuevosErrores;
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // ← Evitar recarga de la página

    const erroresEncontrados = validar();

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados); // Mostrar errores
      return;
    }

    // Sin errores: marcar como enviado
    setErrores({});
    setEnviado(true);
  };

  // Si el formulario fue enviado, mostrar confirmación
  if (enviado) {
    return (
      <div style={{ padding: "32px", textAlign: "center" }}>
        <div
          style={{
            backgroundColor: "#E8F5E9",
            border: "2px solid #2E7D32",
            borderRadius: "12px",
            padding: "32px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ color: "#1B5E20" }}>✓ Registro Exitoso</h2>
          <p>
            <strong>Nombre:</strong> {nombre}
          </p>
          <p>
            <strong>Correo:</strong> {correo}
          </p>
          <p>
            <strong>Programa:</strong> {programa}
          </p>
          <p>
            <strong>Semestre:</strong> {semestre}
          </p>
          <button
            onClick={() => {
              setEnviado(false);
              setNombre("");
              setCorreo("");
              setSemestre("");
            }}
            style={{
              marginTop: "16px",
              padding: "10px 24px",
              cursor: "pointer",
              backgroundColor: "#1565C0",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          >
            Registrar otro estudiante
          </button>
        </div>
      </div>
    );
  }

  // Estilo para inputs con/sin error
  const inputStyle = (campo) => ({
    width: "100%",
    padding: "10px",
    fontSize: "15px",
    border: `2px solid ${errores[campo] ? "#B71C1C" : "#BBDEFB"}`,
    borderRadius: "6px",
    boxSizing: "border-box",
    marginTop: "6px",
  });

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        padding: "32px",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ color: "#95aee4" }}>Registro de Estudiante</h2>
      <p style={{ color: "#8995da" }}>Universidad Libre Seccional Pereira</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "24px" }}>
        {/* Campo: Nombre */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Nombre completo *
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Juan Pérez García"
            style={inputStyle("nombre")}
          />
          {errores.nombre && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.nombre}
            </p>
          )}
        </div>

        {/* Campo: Correo */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Correo electrónico *
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ej: juan.perez@unilibre.edu.co"
            style={inputStyle("correo")}
          />
          {errores.correo && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.correo}
            </p>
          )}
        </div>

        {/* Campo: Programa (select) */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Programa académico
          </label>
          <select
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
            style={{ ...inputStyle("programa"), backgroundColor: "white" }}
          >
            <option>Ingeniería de Sistemas</option>
            <option>Ingeniería Industrial</option>
            <option>Ingeniería Electrónica</option>
            <option>Ingeniería Civil</option>
          </select>
        </div>

        {/* Campo: Semestre */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Semestre actual *
          </label>
          <input
            type="number"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
            placeholder="1 – 10"
            min="1"
            max="10"
            style={inputStyle("semestre")}
          />
          {errores.semestre && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.semestre}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "16px",
            backgroundColor: "#1565C0",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Registrar Estudiante
        </button>
      </form>
    </div>
  );
}

export default FormRegistro;
