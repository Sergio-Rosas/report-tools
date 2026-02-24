export default function Table({ titulo, condiciones }) {
    return (
        <fieldset>
            <legend>{titulo}</legend>
            <div className="table">
                <p></p>
                <label htmlFor="">Cumple</label>
                <label htmlFor="">No Cumple</label>
                <label htmlFor="">No Aplica</label>
                <label htmlFor="">Observaciones</label>

                {condiciones.map((condicion) => {
                    return (
                        <>
                            <label>{condicion}</label>
                            <input
                                type="radio"
                                value="cumple"
                                id=""
                                name={`condicion ${condicion}`}
                            />
                            <input
                                type="radio"
                                value="no-cumple"
                                id=""
                                name={`condicion ${condicion}`}
                            />
                            <input
                                type="radio"
                                value="no-aplica"
                                id=""
                                name={`condicion ${condicion}`}
                            />
                            <input
                                type="text"
                                value="Cumple al momento de la inspección"
                            />
                        </>
                    );
                })}
            </div>
        </fieldset>
    );
}
