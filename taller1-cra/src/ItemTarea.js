import { useState } from "react";

function ItemTarea({ tarea, onToggle, onEliminar, onEditar }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

  // Colores según la prioridad
  const coloresPrioridad = {
    Alta: { bg: "#FEE2E2", text: "#B91C1C" },
    Media: { bg: "#FEF3C7", text: "#B45309" },
    Baja: { bg: "#E0F2FE", text: "#0369A1" },
  };
  const badge = coloresPrioridad[tarea.prioridad] || coloresPrioridad.Media;

  const guardarEdicion = () => {
    if (nuevoTexto.trim()) {
      onEditar(tarea.id, nuevoTexto.trim());
    } else {
      setNuevoTexto(tarea.texto);
    }
    setEditando(false);
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        marginBottom: "8px",
        backgroundColor: tarea.completada ? "#F3F4F6" : "white",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        listStyle: "none",
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => onToggle(tarea.id)}
        style={{ width: "18px", height: "18px", cursor: "pointer" }}
      />

      {/* Texto editable con doble clic */}
      {editando ? (
        <input
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          onBlur={guardarEdicion}
          onKeyDown={(e) => e.key === "Enter" && guardarEdicion()}
          autoFocus
          style={{
            flex: 1,
            padding: "4px 8px",
            fontSize: "15px",
            border: "2px solid #1565C0",
            borderRadius: "4px",
          }}
        />
      ) : (
        <span
          onDoubleClick={() => setEditando(true)}
          title="Haz doble clic para editar"
          style={{
            flex: 1,
            fontSize: "15px",
            cursor: "text",
            textDecoration: tarea.completada ? "line-through" : "none",
            color: tarea.completada ? "#9CA3AF" : "#1A1A2E",
          }}
        >
          {tarea.texto}
        </span>
      )}

      {/* Badge de prioridad */}
      <span
        style={{
          padding: "3px 10px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "bold",
          backgroundColor: badge.bg,
          color: badge.text,
        }}
      >
        {tarea.prioridad || "Media"}
      </span>

      {/* Botón eliminar */}
      <button
        onClick={() => onEliminar(tarea.id)}
        style={{
          backgroundColor: "#FEE2E2",
          color: "#B91C1C",
          border: "none",
          borderRadius: "6px",
          padding: "4px 10px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ✕
      </button>
    </li>
  );
}

export default ItemTarea;
