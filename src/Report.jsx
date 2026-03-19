import { useState, useEffect } from "react";

export default function Report() {
    const monthConverter = {
        0: "ENERO",
        1: "FEBRERO",
        2: "MARZO",
        3: "ABRIL",
        4: "MAYO",
        5: "JUNIO",
        6: "JULIO",
        7: "AGOSTO",
        8: "SEPTIEMBRE",
        9: "OCTUBRE",
        10: "NOVIEMBRE",
        11: "DICIEMBRE",
    };

    const [report, setReport] = useState([]);
    const [uploadVisibility, setUploadVisibility] = useState(false);

    useEffect(() => {
        const companyData = JSON.parse(localStorage.getItem("companyData"));
        console.log(companyData);
        setReport(companyData.productos);
    }, []);

    return (
        <section>
            <table>
                <caption>Productos Evaluados:</caption>
                <thead>
                    <tr>
                        <th>Referencia</th>
                        <th>Lote</th>
                        <th>Serial</th>
                        <th>Fecha de Fabricación</th>
                        <th>Concepto</th>
                        {uploadVisibility && <th>Imágenes</th>}
                    </tr>
                </thead>
                <tbody>
                    {report.map((row, index) => (
                        <tr
                            className={
                                index % 2 === 0 && `table__row--even-background`
                            }
                            key={row.id}
                        >
                            <td>{row.referencia}</td>
                            <td>{row.lote}</td>
                            <td>{row.serie}</td>
                            <td>{`${monthConverter[new Date(row["fecha-fabricacion"]).getDate()]}-${new Date(row["fecha-fabricacion"]).getFullYear()}`}</td>
                            <td>{row.servicio}</td>
                            {uploadVisibility && (
                                <td class="table__image-input">
                                    <label>
                                        <input
                                            type="file"
                                            id="images-upload"
                                            accept="image/png, image/jpeg, image/jpg"
                                            multiple
                                        />
                                    </label>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttons">
                <button
                    className="button button--save"
                    onClick={() => setUploadVisibility(!uploadVisibility)}
                >
                    Subir imágenes
                </button>
                <button className="button button--save">Generar reporte</button>
            </div>
        </section>
    );
}
