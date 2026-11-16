// src/TarjetaPerfil.js

function TarjetaPerfil() {
  return (
    <div
      style={{
        border: "2px solid #1565C0",
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "360px",
        margin: "20px auto",
        fontFamily: "Arial",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#0D2353", marginBottom: "8px" }}>
        Juan Pérez García
      </h2>
      <p style={{ color: "#455A64" }}>
        <strong>Programa:</strong> Ingeniería de Sistemas
      </p>
      <p style={{ color: "#455A64" }}>
        <strong>Semestre:</strong> 4
      </p>
      <p style={{ color: "#455A64" }}>
        <strong>Ciudad:</strong> Pereira, Risaralda
      </p>
      <p
        style={{
          backgroundColor: "#E3F2FD",
          padding: "8px",
          borderRadius: "6px",
          fontSize: "14px",
          color: "#1565C0",
        }}
      >
        Aprendiendo React con la Universidad Libre
      </p>
    </div>
  );
}

export default TarjetaPerfil;
