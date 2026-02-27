import Table from "./Table";
import data from "./data";

export default function MainForm() {
    function save(formData) {
        console.log(formData.get("condicion Cuenta con el alma completa"));
        console.log(Object.fromEntries(formData));
    }

    function handleFocus(e) {
        e.target.select();
    }

    return (
        <form className="form" action={save}>
            <input
                type="radio"
                value="fabricante"
                id="fabricante"
                name="usuario"
                defaultChecked="true"
            />
            <label htmlFor="fabricante">Fabricante</label>
            <input
                type="radio"
                value="distribuidor"
                id="distribuidor"
                name="usuario"
            />
            <label htmlFor="distribuidor">Distribuidor</label>
            <input
                type="radio"
                value="consumidor"
                id="consumidor"
                name="usuario"
            />
            <label htmlFor="consumidor">Consumidor</label>
            <div className="important">
                <label htmlFor="empresa">Nombre de la Empresa</label>
                <input
                    type="text"
                    name="empresa"
                    id="empresa"
                    defaultValue="Empresa Temporal"
                    onFocus={handleFocus}
                />

                <label htmlFor="fecha-fabricacion">Fecha de Fabricación</label>
                <input
                    type="date"
                    name="fecha-fabricacion"
                    id="fecha-fabricacion"
                    min="2016-01-01"
                    defaultValue="2020-11-02"
                    onFocus={handleFocus}
                />

                <label htmlFor="distribuidor">Distribuidor</label>
                <input
                    type="text"
                    name="distribuidor"
                    id="distribuidor"
                    defaultValue="Distribuciones"
                    onFocus={handleFocus}
                />

                <label htmlFor="referencia">Referencia</label>
                <input
                    type="text"
                    name="referencia"
                    id="referencia"
                    defaultValue="AXW-Z098S"
                    onFocus={handleFocus}
                />

                <label htmlFor="fecha-inspeccion">Fecha de Inspección</label>
                <input
                    type="date"
                    name="fecha-inspeccion"
                    id="fecha-inspeccion"
                    min="2026-01-01"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    onFocus={handleFocus}
                />

                <label htmlFor="lote">Lote</label>
                <input
                    type="text"
                    name="lote"
                    id="lote"
                    defaultValue="200T89756"
                    onFocus={handleFocus}
                />

                <label htmlFor="producto">Nombre del Producto</label>
                <input
                    type="text"
                    name="producto"
                    id="producto"
                    defaultValue="Eslinga"
                    onFocus={handleFocus}
                />

                <label htmlFor="serie">Serie</label>
                <input
                    type="text"
                    name="serie"
                    id="serie"
                    defaultValue="7898852"
                    onFocus={handleFocus}
                />
            </div>
            <h3>FORMATO DE INSPECCIÓN DE EQUIPOS</h3>
            <p>
                Aspectos a inspeccionar: etiquetas, reatas, cuerdas, costuras,
                herrajes, plásticos
            </p>
            <div className="table-container">
                {data.map((obj, index) => (
                    <Table
                        titulo={`${obj.title}`}
                        condiciones={obj.elems}
                        index={index + 1}
                        key={obj.title}
                    />
                ))}
            </div>
            <p>
                <span>Continúa en servicio:</span> Equipo que de acuerdo a la
                inspección puede seguir en uso.
            </p>
            <p>
                <span>Retirar en servicio:</span> Equipo dado de baja.
            </p>

            <p>Veredicto:</p>
            <input
                type="radio"
                value="continua"
                id="continua"
                name="servicio"
                defaultChecked="true"
            />
            <label htmlFor="continua">Continúa en servicio</label>

            <input type="radio" value="retirar" id="retirar" name="servicio" />
            <label htmlFor="retirar">Retirar de servicio</label>

            <label htmlFor="informe">
                Informe final del equipo/conclusiones:
            </label>
            <textarea name="informe" id="informe"></textarea>
            <button>Guardar</button>
        </form>
    );
}
