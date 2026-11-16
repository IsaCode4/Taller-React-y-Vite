import { useState } from "react";

function FormTarea({ onAgregar }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return; // No agregar tareas vacías
    onAgregar(texto.trim()); // Llamar la función del padre
    setTexto(""); // Limpiar el campo
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "8px", marginBottom: "24px" }}
    >
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una nueva tarea..."
        style={{
          flex: 1,
          padding: "10px 14px",
          fontSize: "15px",
          border: "2px solid #BBDEFB",
          borderRadius: "8px",
        }}
      />
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
