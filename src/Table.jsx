export default function Table({ titulo, condiciones, index }) {
    return (
        <fieldset>
            <legend>{`${index} ${titulo}`}</legend>
            <div className="table">
                <p></p>
                <label htmlFor="">Cumple</label>
                <label htmlFor="">No Cumple</label>
                <label htmlFor="">No Aplica</label>
                <label htmlFor="">Observaciones</label>

                {condiciones.map((condicion, i) => {
                    return (
                        <>
                            <label>{`${index}.${i + 1} ${condicion.name}`}</label>
                            <input
                                type="radio"
                                value="cumple"
                                id=""
                                name={`condicion ${condicion.name}`}
                                checked={condicion.status === "cumple"}
                            />
                            <input
                                type="radio"
                                value="no-cumple"
                                id=""
                                name={`condicion ${condicion.name}`}
                                checked={condicion.status === "no cumple"}
                            />
                            <input
                                type="radio"
                                value="no-aplica"
                                id=""
                                name={`condicion ${condicion.name}`}
                                checked={condicion.status === "no aplica"}
                            />
                            <input
                                type="text"
                                value={
                                    condicion.status === "cumple"
                                        ? "Cumple al momento de la inspección"
                                        : condicion.status === "no aplica"
                                          ? "No aplica para este equipo"
                                          : ""
                                }
                            />
                        </>
                    );
                })}
            </div>
        </fieldset>
    );
}
