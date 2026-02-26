export default function Table({ titulo, condiciones, index }) {
    return (
        <fieldset>
            <legend>{`${index} ${titulo}`}</legend>
            <div className="table">
                <p></p>
                <label htmlFor="" className="table__title table__title--center">
                    Cumple
                </label>
                <label htmlFor="" className="table__title table__title--center">
                    No Cumple
                </label>
                <label htmlFor="" className="table__title table__title--center">
                    No Aplica
                </label>
                <label htmlFor="" className="table__title">
                    Observaciones
                </label>

                {condiciones.map((condicion, i) => {
                    return (
                        <>
                            <label
                                className={`${i % 2 !== 1 ? "table__row--background" : ""}`}
                            >{`${index}.${i + 1} ${condicion.name}`}</label>
                            <div
                                className={`table__radio ${i % 2 !== 1 ? "table__row--background" : ""}`}
                            >
                                <input
                                    type="radio"
                                    value="cumple"
                                    id=""
                                    name={`condicion ${condicion.name}`}
                                    checked={condicion.status === "cumple"}
                                />
                            </div>
                            <input
                                className={`table__radio ${i % 2 !== 1 ? "table__row--background" : ""}`}
                                type="radio"
                                value="no-cumple"
                                id=""
                                name={`condicion ${condicion.name}`}
                                checked={condicion.status === "no cumple"}
                            />
                            <input
                                className={`table__radio ${i % 2 !== 1 ? "table__row--background" : ""}`}
                                type="radio"
                                value="no-aplica"
                                id=""
                                name={`condicion ${condicion.name}`}
                                checked={condicion.status === "no aplica"}
                            />
                            <input
                                type="text"
                                className={`${i % 2 !== 1 ? "table__row--background" : ""}`}
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
