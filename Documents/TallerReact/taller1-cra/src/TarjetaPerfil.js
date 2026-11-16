function TarjetaPerfil() {
  return (
    <div
      style={{
        border: "2px solid #2E7D32",
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "360px",
        margin: "20px auto",
        fontFamily: "Arial",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#1B5E20", marginBottom: "8px" }}>Isabela Largo</h2>
      <p style={{ color: "#37474F" }}>
        <strong>Programa:</strong> Ingeniería de Sistemas
      </p>
      <p style={{ color: "#37474F" }}>
        <strong>Semestre:</strong> 5
      </p>
      <p style={{ color: "#37474F" }}>
        <strong>Ciudad:</strong> Pereira, Risaralda
      </p>
      <p style={{ color: "#37474F" }}>
        <strong>Correo electrónico:</strong> isabela-marinl@unilibre.edu.co
      </p>
      <p
        style={{
          backgroundColor: "#E8F5E9",
          padding: "8px",
          borderRadius: "6px",
          fontSize: "14px",
          color: "#2E7D32",
        }}
      >
        Aprendiendo React con la Universidad Libre
      </p>
    </div>
  );
}

export default TarjetaPerfil;
