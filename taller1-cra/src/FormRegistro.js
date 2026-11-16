import { useState } from "react";

function FormRegistro() {
  // Estados de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [programa, setPrograma] = useState("Ingeniería de Sistemas");
  const [semestre, setSemestre] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Estados de la UI
  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState({});

  // Función de validación
  const validar = () => {
    const nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!correo.trim()) nuevosErrores.correo = "El correo es obligatorio";
    else if (!correo.includes("@"))
      nuevosErrores.correo = "El correo debe contener @";

    // Validación de teléfono: numérico y de 10 dígitos
    if (!telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{10}$/.test(telefono)) {
      nuevosErrores.telefono =
        "El teléfono debe ser numérico y tener exactamente 10 dígitos";
    }

    if (!semestre) nuevosErrores.semestre = "El semestre es obligatorio";
    else if (semestre < 1 || semestre > 10)
      nuevosErrores.semestre = "El semestre debe estar entre 1 y 10";

    // Validación del checkbox de términos
    if (!aceptaTerminos) {
      nuevosErrores.terminos =
        "Debes aceptar los términos y condiciones para continuar";
    }

    return nuevosErrores;
  };

  // Manejador del envío
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresEncontrados = validar();

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
      return;
    }

    setErrores({});
    setEnviado(true);
  };

  // Pantalla de confirmación tras enviar
  if (enviado) {
    return (
      <div
        style={{ padding: "32px", textAlign: "center", fontFamily: "Arial" }}
      >
        <div
          style={{
            backgroundColor: "#E8F5E9",
            border: "2px solid #2E7D32",
            borderRadius: "12px",
            padding: "32px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ color: "#1B5E20" }}>✓ Registro Exitoso</h2>
          <p>
            <strong>Nombre:</strong> {nombre}
          </p>
          <p>
            <strong>Correo:</strong> {correo}
          </p>
          <p>
            <strong>Teléfono:</strong> {telefono}
          </p>
          <p>
            <strong>Programa:</strong> {programa}
          </p>
          <p>
            <strong>Semestre:</strong> {semestre}
          </p>
          <button
            onClick={() => {
              setEnviado(false);
              setNombre("");
              setCorreo("");
              setTelefono("");
              setSemestre("");
              setAceptaTerminos(false);
            }}
            style={{
              marginTop: "16px",
              padding: "10px 24px",
              cursor: "pointer",
              backgroundColor: "#1565C0",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          >
            Registrar otro estudiante
          </button>
        </div>
      </div>
    );
  }

  const inputStyle = (campo) => ({
    width: "100%",
    padding: "10px",
    fontSize: "15px",
    border: `2px solid ${errores[campo] ? "#B71C1C" : "#BBDEFB"}`,
    borderRadius: "6px",
    boxSizing: "border-box",
    marginTop: "6px",
  });

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        padding: "32px",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ color: "#0D2353" }}>Registro de Estudiante</h2>
      <p style={{ color: "#455A64" }}>Universidad Libre Seccional Pereira</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "24px" }}>
        {/* Campo: Nombre */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Nombre completo *
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Juan Pérez García"
            style={inputStyle("nombre")}
          />
          {errores.nombre && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.nombre}
            </p>
          )}
        </div>

        {/* Campo: Correo */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Correo electrónico *
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ej: juan.perez@unilibre.edu.co"
            style={inputStyle("correo")}
          />
          {errores.correo && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.correo}
            </p>
          )}
        </div>

        {/* Campo: Teléfono */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Teléfono (10 dígitos) *
          </label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Ej: 3101234567"
            maxLength={10}
            style={inputStyle("telefono")}
          />
          {errores.telefono && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.telefono}
            </p>
          )}
        </div>

        {/* Campo: Programa */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Programa académico
          </label>
          <select
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
            style={{ ...inputStyle("programa"), backgroundColor: "white" }}
          >
            <option>Ingeniería de Sistemas</option>
            <option>Ingeniería Industrial</option>
            <option>Ingeniería Electrónica</option>
            <option>Ingeniería Civil</option>
          </select>
        </div>

        {/* Campo: Semestre */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontWeight: "bold", color: "#1A1A2E" }}>
            Semestre actual *
          </label>
          <input
            type="number"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
            placeholder="1 – 10"
            min="1"
            max="10"
            style={inputStyle("semestre")}
          />
          {errores.semestre && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.semestre}
            </p>
          )}
        </div>

        {/* Checkbox: Términos y condiciones */}
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              color: "#1A1A2E",
            }}
          >
            <input
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
              style={{ width: "16px", height: "16px" }}
            />
            <span>Acepto los términos y condiciones *</span>
          </label>
          {errores.terminos && (
            <p
              style={{
                color: "#B71C1C",
                fontSize: "13px",
                margin: "4px 0 0 0",
              }}
            >
              {errores.terminos}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "16px",
            backgroundColor: "#1565C0",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Registrar Estudiante
        </button>
      </form>

      {/* Vista previa en tiempo real */}
      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          backgroundColor: "#F3F4F6",
          border: "1px dashed #9CA3AF",
          borderRadius: "8px",
          fontSize: "14px",
          color: "#37474F",
        }}
      >
        <h4 style={{ margin: "0 0 8px 0", color: "#0D2353" }}>
          Vista previa en tiempo real
        </h4>
        <p style={{ margin: "4px 0" }}>
          <strong>Nombre:</strong> {nombre || "—"}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Correo:</strong> {correo || "—"}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Teléfono:</strong> {telefono || "—"}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Programa:</strong> {programa}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Semestre:</strong> {semestre || "—"}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Términos:</strong>{" "}
          {aceptaTerminos ? "Aceptados ✓" : "Pendiente"}
        </p>
      </div>
    </div>
  );
}

export default FormRegistro;
