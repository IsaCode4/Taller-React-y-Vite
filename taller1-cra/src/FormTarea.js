import { useState } from "react";

function FormTarea({ onAgregar }) {
  const [texto, setTexto] = useState("");
  const [prioridad, setPrioridad] = useState("Media");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    onAgregar(texto.trim(), prioridad);
    setTexto("");
    setPrioridad("Media");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "24px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una nueva tarea..."
        style={{
          flex: 1,
          minWidth: "200px",
          padding: "10px 14px",
          fontSize: "15px",
          border: "2px solid #BBDEFB",
          borderRadius: "8px",
        }}
      />

      <select
        value={prioridad}
        onChange={(e) => setPrioridad(e.target.value)}
        style={{
          padding: "10px 12px",
          fontSize: "15px",
          border: "2px solid #BBDEFB",
          borderRadius: "8px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <option value="Alta">Prioridad: Alta</option>
        <option value="Media">Prioridad: Media</option>
        <option value="Baja">Prioridad: Baja</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#1565C0",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "15px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        + Agregar
      </button>
    </form>
  );
}

export default FormTarea;
