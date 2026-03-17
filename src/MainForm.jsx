import { useEffect, useRef } from "react";
import { pdfUpdate } from "./pdfUpdate";

import Table from "./Table";

import dataArr from "./data";

export default function MainForm({ template, handleTemplate }) {
    const defaultValue = true;
    const data = dataArr.filter((data) => data.name === template);
    const { conditions, name, reference, conclusions, distributor } =
        data.at(0);
    const statusType = useRef(false);

    function statusPass(e) {
        statusType.current = e.target.value === "true";
    }

    async function save(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        await pdfUpdate(Object.fromEntries(formData), statusType.current);
    }

    function handleFocus(e) {
        e.target.select();
    }

    function handleBack() {
        const confirmation = confirm(
            "¿Está seguro de regresar?\nNingún cambio de esta plantilla será guardado.",
        );
        confirmation && handleTemplate(false);
    }

    function preventRefresh(e) {
        e.preventDefault();
    }

    useEffect(() => {
        window.addEventListener("beforeunload", preventRefresh);
    }, []);

    return (
        <>
            <h2 className="title title--template">{template}</h2>
            <form className="form" onSubmit={save}>
                <div className="user">
                    <div className="radio-square--container">
                        <input
                            className="radio-square"
                            type="radio"
                            value="fabricante"
                            id="fabricante"
                            name="usuario"
                            defaultChecked={name !== "En blanco" && "true"}
                            required
                        />
                        <label htmlFor="fabricante">Fabricante</label>
                    </div>
                    <div className="radio-square--container">
                        <input
                            className="radio-square"
                            type="radio"
                            value="distribuidor"
                            id="distribuidor"
                            name="usuario"
                            required
                        />
                        <label htmlFor="distribuidor">Distribuidor</label>
                    </div>
                    <div className="radio-square--container">
                        <input
                            className="radio-square"
                            type="radio"
                            value="consumidor"
                            id="consumidor"
                            name="usuario"
                            required
                        />
                        <label htmlFor="consumidor">Consumidor</label>
                    </div>
                </div>

                <div className="important">
                    <label htmlFor="empresa">Nombre de la Empresa:</label>
                    <input
                        type="text"
                        name="empresa"
                        id="empresa"
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                        defaultValue={defaultValue ? "Empresa Temporal" : ""}
                    />

                    <label htmlFor="fecha-fabricacion">
                        Fecha de Fabricación:
                    </label>
                    <input
                        type="date"
                        name="fecha-fabricacion"
                        id="fecha-fabricacion"
                        min="2016-01-01"
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                        defaultValue={defaultValue ? "2020-11-02" : ""}
                    />

                    <label htmlFor="distribuidor">Distribuidor:</label>
                    <input
                        type="text"
                        name="distribuidor"
                        id="distribuidor"
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                        value={name === "En blanco" ? "" : distributor}
                    />

                    <label htmlFor="referencia">Referencia:</label>
                    <input
                        type="text"
                        name="referencia"
                        id="referencia"
                        defaultValue={reference}
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                    />

                    <label htmlFor="fecha-inspeccion">
                        Fecha de Inspección:
                    </label>
                    <input
                        type="date"
                        name="fecha-inspeccion"
                        id="fecha-inspeccion"
                        min="2026-01-01"
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                        defaultValue={
                            defaultValue
                                ? new Date().toISOString().split("T")[0]
                                : ""
                        }
                    />

                    <label htmlFor="lote">Lote:</label>
                    <input
                        type="text"
                        name="lote"
                        id="lote"
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                        defaultValue={defaultValue ? "200T89756" : ""}
                    />

                    <label htmlFor="producto">Nombre del Producto:</label>
                    <input
                        type="text"
                        name="producto"
                        id="producto"
                        defaultValue={name === "En blanco" ? "" : name}
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                    />

                    <label htmlFor="serie">Serie:</label>
                    <input
                        type="text"
                        name="serie"
                        id="serie"
                        onFocus={handleFocus}
                        required
                        pattern="^[^\s]+.+[^\s]$"
                        defaultValue={defaultValue ? "7898852" : ""}
                    />
                </div>
                <div className="flex-container">
                    <h3>FORMATO DE INSPECCIÓN DE EQUIPOS</h3>
                    <p>
                        Aspectos a inspeccionar: etiquetas, reatas, cuerdas,
                        costuras, herrajes, plásticos
                    </p>
                </div>
                <div className="table-container">
                    {conditions.map((obj, index) => (
                        <Table
                            title={`${obj.title}`}
                            conditions={obj.elems}
                            index={index + 1}
                            template={template}
                            key={obj.title}
                        />
                    ))}
                </div>
                <div>
                    <p>
                        <span className="subtitle">Continúa en servicio:</span>{" "}
                        Equipo que de acuerdo a la inspección puede seguir en
                        uso.
                    </p>
                    <p>
                        <span className="subtitle">Retirar en servicio:</span>{" "}
                        Equipo dado de baja.
                    </p>
                </div>

                <div className="veredict">
                    <p className="subtitle">Veredicto:</p>
                    <div className="radio-square--container">
                        <input
                            className="radio-square"
                            type="radio"
                            value="continua"
                            id="continua"
                            name="servicio"
                            defaultChecked={name !== "En blanco" && "true"}
                            required
                        />
                        <label htmlFor="continua">Continúa en servicio</label>
                    </div>
                    <div className="radio-square--container">
                        <input
                            className="radio-square"
                            type="radio"
                            value="retirar"
                            id="retirar"
                            name="servicio"
                            required
                        />
                        <label htmlFor="retirar">Retirar de servicio</label>
                    </div>
                </div>

                <label className="subtitle" htmlFor="informe">
                    Informe final del equipo/conclusiones:
                </label>
                <textarea
                    name="informe"
                    id="informe"
                    required
                    onFocus={handleFocus}
                    defaultValue={name === "En blanco" ? "" : conclusions}
                ></textarea>
                <div className="buttons">
                    <input
                        type="button"
                        value="↵ Regresar"
                        className="button button--back"
                        onClick={handleBack}
                    />
                    <div className="buttons">
                        <button
                            className="button button--save"
                            value="false"
                            onClick={statusPass}
                        >
                            Guardar
                        </button>
                        <button
                            className="button button--save"
                            value="true"
                            onClick={statusPass}
                        >
                            Guardar y bloquear
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
