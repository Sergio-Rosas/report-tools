import Table from "./Table";
import data from "./data";

export default function MainForm() {
    return (
        <form className="form">
            <input
                type="radio"
                value="fabricante"
                id="fabricante"
                name="usuario"
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
                <input type="text" name="empresa" id="empresa" />

                <label htmlFor="fecha-fabricacion">Fecha de Fabricación</label>
                <input
                    type="date"
                    name="fecha-fabricacion"
                    id="fecha-fabricacion"
                    min="2016-01-01"
                />

                <label htmlFor="distribuidor">Distribuidor</label>
                <input type="text" name="distribuidor" id="distribuidor" />

                <label htmlFor="referencia">Referencia</label>
                <input type="text" name="referencia" id="referencia" />

                <label htmlFor="fecha-inspeccion">Fecha de Inspección</label>
                <input
                    type="date"
                    name="fecha-inspeccion"
                    id="fecha-inspeccion"
                    min="2026-01-01"
                />

                <label htmlFor="lote">Lote</label>
                <input type="text" name="lote" id="lote" />

                <label htmlFor="producto">Nombre del Producto</label>
                <input type="text" name="producto" id="producto" />

                <label htmlFor="serie">Serie</label>
                <input type="text" name="serie" id="serie" />
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
            />
            <label htmlFor="continua">Continúa en servicio</label>

            <input type="radio" value="retirar" id="retirar" name="servicio" />
            <label htmlFor="retirar">Retirar de servicio</label>

            <label htmlFor="informe">
                Informe final del equipo/conclusiones:
            </label>
            <textarea name="informe" id="informe"></textarea>
        </form>
    );
}
