export default function Table({ titulo, condiciones, index }) {
    function handleFocus(e) {
        e.target.select();
    }

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
                                className={`${i % 2 !== 1 ? "table__row--even-background" : "table__row--odd-background"}`}
                            >{`${index}.${i + 1} ${condicion.name}`}</label>
                            <div
                                className={`radio-container ${i % 2 !== 1 ? "table__row--even-background" : "table__row--odd-background"}`}
                            >
                                <input
                                    className="table__radio table__radio--positive"
                                    type="radio"
                                    value="cumple"
                                    id=""
                                    name={`${index}.${i + 1}`}
                                    defaultChecked={
                                        condicion.status === "cumple"
                                    }
                                    required
                                />
                            </div>
                            <div
                                className={`radio-container ${i % 2 !== 1 ? "table__row--even-background" : "table__row--odd-background"}`}
                            >
                                <input
                                    className="table__radio table__radio--negative"
                                    type="radio"
                                    value="no cumple"
                                    id=""
                                    name={`${index}.${i + 1}`}
                                    defaultChecked={
                                        condicion.status === "no cumple"
                                    }
                                    required
                                />
                            </div>
                            <div
                                className={`radio-container ${i % 2 !== 1 ? "table__row--even-background" : "table__row--odd-background"}`}
                            >
                                <input
                                    className="table__radio table__radio--negative"
                                    type="radio"
                                    value="no aplica"
                                    id=""
                                    name={`${index}.${i + 1}`}
                                    defaultChecked={
                                        condicion.status === "no aplica"
                                    }
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                className={`table__text ${i % 2 !== 1 ? "table__row--even-background" : "table__row--odd-background"}`}
                                onFocus={handleFocus}
                                name={`observaciones ${index}.${i + 1}`}
                                required
                                defaultValue={
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
