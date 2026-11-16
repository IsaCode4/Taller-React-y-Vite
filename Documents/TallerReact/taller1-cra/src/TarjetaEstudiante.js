// Desestructuración de props directamente en los parámetros
function TarjetaEstudiante({ nombre, programa, semestre, nota }) {
  // Lógica para color de la nota
  const colorNota =
    nota >= 4.0 ? "#1B5E20" : nota >= 3.0 ? "#E65100" : "#B71C1C";

  return (
    <div
      style={{
        border: "1px solid #BBDEFB",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        backgroundColor: "#FAFAFA",
        minWidth: "200px",
      }}
    >
      <h3 style={{ color: "#0D2353", margin: "0 0 8px 0" }}>{nombre}</h3>
      <p style={{ margin: "4px 0", fontSize: "14px", color: "#455A64" }}>
        {programa}
      </p>
      <p style={{ margin: "4px 0", fontSize: "14px", color: "#455A64" }}>
        Semestre: <strong>{semestre}</strong>
      </p>
      <span
        style={{
          display: "inline-block",
          padding: "4px 12px",
          borderRadius: "20px",
          backgroundColor: colorNota,
          color: "white",
          fontSize: "14px",
          marginTop: "8px",
        }}
      >
        Nota: {nota}
      </span>
    </div>
  );
}

export default TarjetaEstudiante;
