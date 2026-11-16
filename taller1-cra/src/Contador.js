import { useState } from "react";

function ContadorBasico() {
  const [contador, setContador] = useState(0);
  const [historial, setHistorial] = useState([0]); // Guarda los últimos 5 valores

  // Función auxiliar para actualizar el valor y registrar en el historial
  const actualizarContador = (nuevoValor) => {
    setContador(nuevoValor);
    setHistorial((prev) => [...prev, nuevoValor].slice(-5)); // Conserva solo los últimos 5
  };

  const incrementar = () => actualizarContador(contador + 1);
  const decrementar = () => {
    if (contador > 0) actualizarContador(contador - 1);
  };
  const duplicar = () => actualizarContador(contador * 2);
  const reiniciar = () => actualizarContador(0);

  const color = contador > 0 ? "#1B5E20" : contador < 0 ? "#B71C1C" : "#455A64";
  const estaEnCero = contador === 0;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "24px",
        fontFamily: "Arial",
        maxWidth: "420px",
        margin: "0 auto 24px auto",
        border: "1px solid #BBDEFB",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#1c3b7c" }}>Contador Interactivo</h2>
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

      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={decrementar}
          disabled={estaEnCero}
          style={{
            ...estiloBoton(estaEnCero ? "#9CA3AF" : "#B71C1C"),
            cursor: estaEnCero ? "not-allowed" : "pointer",
          }}
        >
          − Restar
        </button>

        <button onClick={reiniciar} style={estiloBoton("#455A64")}>
          Reiniciar
        </button>

        <button onClick={incrementar} style={estiloBoton("#1B5E20")}>
          + Sumar
        </button>

        <button onClick={duplicar} style={estiloBoton("#1565C0")}>
          ×2 Duplicar
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#F3F4F6",
          borderRadius: "8px",
          fontSize: "14px",
          color: "#37474F",
        }}
      >
        <strong>Últimos 5 valores:</strong> {historial.join(" → ")}
      </div>

      {contador > 10 && (
        <p style={{ color: "#1565C0", marginTop: "16px" }}>
          ¡Número grande! Mayor a 10.
        </p>
      )}
    </div>
  );
}

function ContadorAvanzado() {
  const [contador, setContador] = useState(0);
  const [paso, setPaso] = useState(1);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "24px",
        fontFamily: "Arial",
        maxWidth: "420px",
        margin: "0 auto",
        border: "1px solid #BBDEFB",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#1c3b7c" }}>Contador con Paso Configurable</h2>

      <div style={{ marginBottom: "24px" }}>
        <label>
          <strong>Paso: </strong>
        </label>
        <input
          type="number"
          value={paso}
          onChange={(e) => setPaso(Number(e.target.value))}
          min="1"
          max="100"
          style={{ width: "60px", padding: "4px", fontSize: "16px" }}
        />
      </div>

      <p
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "#1565C0",
          margin: "16px 0",
        }}
      >
        {contador}
      </p>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <button
          onClick={() => setContador((c) => c - paso)}
          style={estiloBoton("#B71C1C")}
        >
          − {paso}
        </button>
        <button onClick={() => setContador(0)} style={estiloBoton("#455A64")}>
          Reiniciar
        </button>
        <button
          onClick={() => setContador((c) => c + paso)}
          style={estiloBoton("#1B5E20")}
        >
          + {paso}
        </button>
      </div>
    </div>
  );
}

function Contador() {
  return (
    <div>
      <ContadorBasico />
      <ContadorAvanzado />
    </div>
  );
}

function estiloBoton(color) {
  return {
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "15px",
    cursor: "pointer",
  };
}

export default Contador;
