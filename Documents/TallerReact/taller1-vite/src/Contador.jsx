import { useState } from "react";

function ContadorBasico() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  const color = contador > 0 ? "#1B5E20" : contador < 0 ? "#B71C1C" : "#455A64";

  return (
    <div
      style={{
        textAlign: "center",
        padding: "24px",
        fontFamily: "Arial",
        maxWidth: "360px",
        margin: "0 auto 24px auto",
        border: "1px solid #BBDEFB",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#90a4cf" }}>Contador Interactivo</h2>
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

function ContadorAvanzado() {
  const [contador, setContador] = useState(0);
  const [paso, setPaso] = useState(1);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "24px",
        fontFamily: "Arial",
        maxWidth: "360px",
        margin: "0 auto",
        border: "1px solid #BBDEFB",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#93a9d6" }}>Contador con Paso Configurable</h2>

      {/* Selector de paso */}
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
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };
}

export default Contador;
