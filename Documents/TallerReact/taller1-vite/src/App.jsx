import { useState, useEffect } from "react";
import FormTarea from "./FormTarea";
import ItemTarea from "./ItemTarea";

const TAREAS_INICIALES = [
  {
    id: 1,
    texto: "Leer el manual de React",
    completada: true,
    prioridad: "Baja",
  },
  {
    id: 2,
    texto: "Hacer el Ejercicio 1",
    completada: true,
    prioridad: "Media",
  },
  {
    id: 3,
    texto: "Hacer el Ejercicio 2",
    completada: false,
    prioridad: "Media",
  },
  {
    id: 4,
    texto: "Hacer el Ejercicio 3",
    completada: false,
    prioridad: "Alta",
  },
  {
    id: 5,
    texto: "Completar el Taller 1",
    completada: false,
    prioridad: "Alta",
  },
];

function App() {
  // Cargar desde localStorage si existe; si no, usar TAREAS_INICIALES
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("taller1_tareas");
    return guardadas ? JSON.parse(guardadas) : TAREAS_INICIALES;
  });

  const [filtro, setFiltro] = useState("todas");

  // Guardar automáticamente en localStorage cada vez que cambie la lista de tareas
  useEffect(() => {
    localStorage.setItem("taller1_tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Agregar nueva tarea con prioridad
  const agregarTarea = (texto, prioridad) => {
    const nueva = {
      id: Date.now(),
      texto,
      completada: false,
      prioridad,
    };
    setTareas([...tareas, nueva]);
  };

  // Alternar completada/pendiente
  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t,
      ),
    );
  };

  // Editar texto de una tarea existente
  const editarTarea = (id, nuevoTexto) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, texto: nuevoTexto } : t)),
    );
  };

  // Eliminar tarea individual
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // Eliminar todas las tareas completadas
  const eliminarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada));
  };

  // Filtrar tareas
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  // Contadores
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada).length;
  const pendientes = total - completadas;

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
        maxWidth: "640px",
        margin: "0 auto",
        padding: "32px",
        fontFamily: "Arial",
      }}
    >
      {/* Encabezado */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ color: "#5e8ff8", margin: "0 0 8px 0" }}>
          Mis Tareas — Programación II
        </h1>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ color: "#2682ad" }}>
            Total: <strong>{total}</strong>
          </span>
          <span style={{ color: "#69c06f" }}>
            Completadas: <strong>{completadas}</strong>
          </span>
          <span style={{ color: "#d86666" }}>
            Pendientes: <strong>{pendientes}</strong>
          </span>
        </div>
        <p style={{ fontSize: "12px", color: "#6586c7", marginTop: "6px" }}>
          Tip: Haz doble clic sobre el texto de cualquier tarea para editarla.
        </p>
      </div>

      {/* Formulario */}
      <FormTarea onAgregar={agregarTarea} />

      {/* Filtros y botón de limpiar completadas */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
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

        {completadas > 0 && (
          <button
            onClick={eliminarCompletadas}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              border: "1px solid #FCA5A5",
              backgroundColor: "#FEF2F2",
              color: "#B91C1C",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            🗑 Eliminar completadas ({completadas})
          </button>
        )}
      </div>

      {/* Lista */}
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
              onEditar={editarTarea}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
