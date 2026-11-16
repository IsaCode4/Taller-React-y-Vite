function ItemTarea({ tarea, onToggle, onEliminar }) {
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

      {/* Texto de la tarea */}
      <span
        style={{
          flex: 1,
          fontSize: "15px",
          textDecoration: tarea.completada ? "line-through" : "none",
          color: tarea.completada ? "#9CA3AF" : "#1A1A2E",
        }}
      >
        {tarea.texto}
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
