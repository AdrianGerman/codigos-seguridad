import React from "react";

const SECURITY_CODE = "paradigma";

function UseStateHook({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
      value: "",
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: "",
    });
  };

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log("Terminando la validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
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
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <h2>Eliminar {name}</h2>

        <p>¿Seguro que quieres eliminar UseState?</p>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          SI, eliminar
        </button>
        <button
          onClick={() => {
            onReset();
          }}
        >
          NO, regresar
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h2>{name} fue eliminado</h2>

        <p>SE HA ELIMINADO CORRECTAMENTE</p>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Recuperar {name}
        </button>
      </React.Fragment>
    );
  }
}

export { UseStateHook };
