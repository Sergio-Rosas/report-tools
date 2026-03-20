import { useState, useEffect } from "react";

export default function Report({ uploadEnabled, setUploadEnabled }) {
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

    function uploadAlert() {
        const confirmed = confirm(
            "Si empieza con la subida de imágenes no podrá seguir añadiendo productos al reporte.\n¿Desea continuar?",
        );
        if (confirmed) {
            setUploadEnabled(!uploadEnabled);
        }
    }

    function reportSubmit(formData) {
        console.log(formData.get("images-upload-0"));
    }

    useEffect(() => {
        const companyData = JSON.parse(localStorage.getItem("companyData"));
        setReport(companyData.productos);
    }, []);

    return (
        <form action={reportSubmit}>
            {report.length > 0 && (
                <div>
                    <table>
                        <caption>Productos Evaluados:</caption>
                        <thead>
                            <tr>
                                <th>Referencia</th>
                                <th>Lote</th>
                                <th>Serial</th>
                                <th>Fecha de Fabricación</th>
                                <th>Concepto</th>
                                <th>Imágenes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {report.map((row, index) => (
                                <tr
                                    className={
                                        index % 2 === 0 &&
                                        `table__row--even-background`
                                    }
                                    key={row.id}
                                >
                                    <td>{row.referencia}</td>
                                    <td>{row.lote}</td>
                                    <td>{row.serie}</td>
                                    <td>{`${monthConverter[new Date(row["fecha-fabricacion"]).getMonth() + 1]}-${new Date(row["fecha-fabricacion"]).getFullYear()}`}</td>
                                    <td>{row.servicio}</td>
                                    <td className="table__image-input">
                                        <label>
                                            <input
                                                className={
                                                    uploadEnabled
                                                        ? ""
                                                        : "disabled"
                                                }
                                                type="file"
                                                id={`images-upload-${index}`}
                                                accept="image/png, image/jpeg, image/jpg"
                                                required
                                                multiple
                                                disabled={!uploadEnabled}
                                            />
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="buttons">
                        <button
                            className={`button button--save ${uploadEnabled ? "button--disabled" : ""}`}
                            onClick={uploadAlert}
                            disabled={uploadEnabled}
                        >
                            Subir imágenes
                        </button>
                        <button
                            className={`button button--save ${!uploadEnabled ? "button--disabled" : ""}`}
                            disabled={!uploadEnabled}
                        >
                            Generar reporte
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}
