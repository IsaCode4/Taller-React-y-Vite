import TarjetaEstudiante from "./TarjetaEstudiante";

const estudiantes = [
  {
    id: 1,
    nombre: "Ana García",
    programa: "Ing. Sistemas",
    semestre: 4,
    email: "ana.garcia@unilibre.edu.co",
    nota: 4.2,
  },
  {
    id: 2,
    nombre: "Carlos López",
    programa: "Ing. Comercial",
    semestre: 3,
    email: "carlos.lopez@unilibre.edu.co",
    nota: 3.8,
  },
  {
    id: 3,
    nombre: "María Torres",
    programa: "Ing. Financiera",
    semestre: 5,
    email: "maria.torres@unilibre.edu.co",
    nota: 4.5,
  },
  {
    id: 4,
    nombre: "Luis Ramírez",
    programa: "Ing. Civil",
    semestre: 2,
    email: "luis.ramirez@unilibre.edu.co",
    nota: 3.5,
  },
  {
    id: 5,
    nombre: "Sara Jiménez",
    programa: "Ing. Sistemas",
    semestre: 6,
    email: "sara.jimenez@unilibre.edu.co",
    nota: 4.8,
  },
  {
    id: 6,
    nombre: "Diego Morales",
    programa: "Ing. Electrónica",
    semestre: 4,
    email: "diego.morales@unilibre.edu.co",
    nota: 4.1,
  },
];

function App() {
  // Calcular promedio de notas (suma todas las notas y divide por el total)
  const promedio = (
    estudiantes.reduce((acum, est) => acum + est.nota, 0) / estudiantes.length
  ).toFixed(2);

  return (
    <div style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#0D2353" }}>Listado de Estudiantes</h1>
      <p>Total: {estudiantes.length} estudiantes registrados</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {estudiantes.map((est) => (
          <TarjetaEstudiante
            key={est.id}
            nombre={est.nombre}
            programa={est.programa}
            semestre={est.semestre}
            email={est.email}
            nota={est.nota}
          />
        ))}
      </div>

      <p style={{ marginTop: "24px", fontSize: "16px", color: "#0D2353" }}>
        <strong>Promedio general del grupo:</strong> {promedio}
      </p>
    </div>
  );
}

export default App;
