import React from "react";

const SECURITY_CODE = "paradigma";

function UseStateHook({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
  });

  console.log(state.value);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
          });
        } else {
          setState({
            ...state,
            loading: false,
            error: true,
          });
        }

        console.log("Terminando la validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad</p>

      {state.error && !state.loading && <p>Error: el código es incorrecto</p>}
      {state.loading && <p>Cargando...</p>}

      <input
        value={state.value}
        placeholder="Código de seguridad"
        onChange={(event) => {
          setState({
            ...state,
            value: event.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          setState({
            ...state,
            loading: true,
            error: false,
          });
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseStateHook };
