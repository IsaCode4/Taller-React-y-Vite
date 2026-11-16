import TarjetaEstudiante from "./TarjetaEstudiante";

const estudiantes = [
  {
    id: 1,
    nombre: "Ana García",
    programa: "Ing. Sistemas",
    semestre: 4,
    nota: 4.2,
  },
  {
    id: 2,
    nombre: "Carlos López",
    programa: "Ing. Comercial",
    semestre: 3,
    nota: 3.8,
  },
  {
    id: 3,
    nombre: "María Torres",
    programa: "Ing. Financiera",
    semestre: 5,
    nota: 4.5,
  },
  {
    id: 4,
    nombre: "Luis Ramírez",
    programa: "Ing. Civil",
    semestre: 2,
    nota: 3.5,
  },
  {
    id: 5,
    nombre: "Sara Jiménez",
    programa: "Ing. Sistemas",
    semestre: 6,
    nota: 4.8,
  },
];

function App() {
  return (
    <div style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#0D2353" }}>Listado de Estudiantes</h1>
      <p>Total: {estudiantes.length} estudiantes registrados</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {estudiantes.map((est) => (
          <TarjetaEstudiante
            key={est.id} // OBLIGATORIO en listas
            nombre={est.nombre}
            programa={est.programa}
            semestre={est.semestre}
            nota={est.nota}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
