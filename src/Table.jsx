export default function Table({ title, conditions, index }) {
    function handleFocus(e) {
        e.target.select();
    }

    return (
        <fieldset>
            <legend>{`${index} ${title}`}</legend>
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

                {conditions.map((condition, i) => {
                    return (
                        <>
                            <label
                                className={`${i % 2 !== 1 ? "table__row--even-background" : "table__row--odd-background"}`}
                            >{`${index}.${i + 1} ${condition.name}`}</label>
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
                                        condition.status === "cumple"
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
                                        condition.status === "no cumple"
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
                                        condition.status === "no aplica"
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
                                    condition.status === "cumple"
                                        ? "Cumple al momento de la inspección"
                                        : condition.status === "no aplica"
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
