import { useState } from "react";
import FormTarea from "./FormTarea";
import ItemTarea from "./ItemTarea";

// Tareas iniciales de ejemplo
const TAREAS_INICIALES = [
  { id: 1, texto: "Leer el manual de React", completada: true },
  { id: 2, texto: "Hacer el Ejercicio 1", completada: true },
  { id: 3, texto: "Hacer el Ejercicio 2", completada: false },
  { id: 4, texto: "Hacer el Ejercicio 3", completada: false },
  { id: 5, texto: "Completar el Taller 1", completada: false },
];

function App() {
  const [tareas, setTareas] = useState(TAREAS_INICIALES);
  const [filtro, setFiltro] = useState("todas"); // 'todas' | 'pendientes' | 'completadas'

  // Agregar nueva tarea
  const agregarTarea = (texto) => {
    const nueva = {
      id: Date.now(), // ID único usando timestamp
      texto,
      completada: false,
    };
    setTareas([...tareas, nueva]); // Spread: crear nuevo array (inmutabilidad)
  };

  // Alternar estado completada/pendiente
  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t,
      ),
    );
  };

  // Eliminar tarea por ID
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // Filtrar tareas según el filtro activo
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true; // 'todas'
  });

  // Contadores
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada).length;
  const pendientes = total - completadas;

  // Estilo para botones de filtro
  const btnFiltro = (nombre) => ({
    padding: "6px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    border: `2px solid ${filtro === nombre ? "#1565C0" : "#E5E7EB"}`,
    backgroundColor: filtro === nombre ? "#1565C0" : "white",
    color: filtro === nombre ? "white" : "#455A64",
    fontWeight: filtro === nombre ? "bold" : "normal",
  });

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "32px",
        fontFamily: "Arial",
      }}
    >
      {/* Encabezado */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ color: "#8ba4db", margin: "0 0 8px 0" }}>
          Mis Tareas — Programación II
        </h1>
        <div style={{ display: "flex", gap: "16px" }}>
          <span style={{ color: "#2ea2d8" }}>
            Total: <strong>{total}</strong>
          </span>
          <span style={{ color: "#4cb352" }}>
            Completadas: <strong>{completadas}</strong>
          </span>
          <span style={{ color: "#c96f6f" }}>
            Pendientes: <strong>{pendientes}</strong>
          </span>
        </div>
      </div>

      {/* Formulario para agregar tarea */}
      <FormTarea onAgregar={agregarTarea} />

      {/* Botones de filtro */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <button style={btnFiltro("todas")} onClick={() => setFiltro("todas")}>
          Todas ({total})
        </button>
        <button
          style={btnFiltro("pendientes")}
          onClick={() => setFiltro("pendientes")}
        >
          Pendientes ({pendientes})
        </button>
        <button
          style={btnFiltro("completadas")}
          onClick={() => setFiltro("completadas")}
        >
          Completadas ({completadas})
        </button>
      </div>

      {/* Lista de tareas filtradas */}
      {tareasFiltradas.length === 0 ? (
        <p style={{ color: "#9CA3AF", textAlign: "center", padding: "32px" }}>
          No hay tareas en esta categoría.
        </p>
      ) : (
        <ul style={{ padding: 0 }}>
          {tareasFiltradas.map((tarea) => (
            <ItemTarea
              key={tarea.id}
              tarea={tarea}
              onToggle={toggleTarea}
              onEliminar={eliminarTarea}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
