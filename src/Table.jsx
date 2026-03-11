export default function Table({ title, conditions, index, template }) {
    function handleFocus(e) {
        e.target.select();
    }

    function obervationsText(status, index, i, template) {
        if (status === "cumple") {
            if (template === "Arnes" && `${index}.${i + 1}` === "5.7") {
                return "Portaeslingas en buen estado";
            } else if (template === "Cuerda semiestatica de 11mm") {
                if (`${index}.${i + 1}` === "2.5") {
                    return "Cuerda no deshilachada";
                } else if (`${index}.${i + 1}` === "2.6") {
                    return "Cuerda sin rastros químicos";
                } else if (`${index}.${i + 1}` === "2.7") {
                    return "Cuerda sin quemadura";
                } else {
                    return "Cumple al momento de la inspección";
                }
            } else if (
                template === "Freno arrestador automatico" &&
                `${index}.${i + 1}` === "6.11"
            ) {
                return "Seguros funcionales";
            } else if (
                template === "Mosqueton carabinero automatico" &&
                `${index}.${i + 1}` === "6.11"
            ) {
                return "Seguros funcionales";
            } else {
                return "Cumple al momento de la inspección";
            }
        } else if (status === "no aplica") {
            return "No aplica para este equipo";
        } else {
            return "";
        }
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
                                defaultValue={(() =>
                                    obervationsText(
                                        condition.status,
                                        index,
                                        i,
                                        template,
                                    ))()}
                            />
                        </>
                    );
                })}
            </div>
        </fieldset>
    );
}
