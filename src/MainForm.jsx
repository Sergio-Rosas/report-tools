import Table from "./Table";

export default function MainForm() {
    return (
        <form>
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

            <Table
                titulo="1. Condición de las etiquetas"
                condiciones={[
                    "1.1 El lote es legible",
                    "1.2 El serial es legible",
                    "1.3 La fecha de fabricación es legible",
                    "1.4 La etiqueta esta completa",
                ]}
            />
        </form>
    );
}
