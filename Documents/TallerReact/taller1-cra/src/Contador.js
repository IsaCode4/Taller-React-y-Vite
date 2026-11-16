import { useState } from "react"; // ← Importar el Hook

function Contador() {
  // Declarar el estado
  const [contador, setContador] = useState(0);

  // Funciones manejadoras de eventos
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  // Color dinámico según el valor
  const color = contador > 0 ? "#1B5E20" : contador < 0 ? "#B71C1C" : "#455A64";

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "320px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#0D2353" }}>Contador Interactivo</h2>

      {/* Mostrar el valor actual con color dinámico */}
      <p
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          color: color,
          margin: "16px 0",
        }}
      >
        {contador}
      </p>

      {/* Botones de control */}
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <button onClick={decrementar} style={estiloBoton("#B71C1C")}>
          − Restar
        </button>

        <button onClick={reiniciar} style={estiloBoton("#455A64")}>
          Reiniciar
        </button>

        <button onClick={incrementar} style={estiloBoton("#1B5E20")}>
          + Sumar
        </button>
      </div>

      {/* Mensaje condicional */}
      {contador > 10 && (
        <p style={{ color: "#1565C0", marginTop: "16px" }}>
          ¡Número grande! Mayor a 10.
        </p>
      )}
      {contador < -10 && (
        <p style={{ color: "#B71C1C", marginTop: "16px" }}>
          ¡Número muy negativo! Menor a -10.
        </p>
      )}
    </div>
  );
}

// Función auxiliar para el estilo de los botones
function estiloBoton(color) {
  return {
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };
}

export default Contador;
