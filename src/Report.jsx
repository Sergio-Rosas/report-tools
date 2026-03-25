import { useState, useEffect } from "react";
import { monthConverter } from "./supportFunctions";

export default function Report({
    uploadEnabled,
    setUploadEnabled,
    handleImages,
}) {
    const [report, setReport] = useState([]);

    function uploadAlert() {
        const confirmed = confirm(
            "Si empieza con la subida de imágenes no podrá seguir añadiendo productos al reporte.\n¿Desea continuar?",
        );
        if (confirmed) {
            setUploadEnabled(!uploadEnabled);
        }
    }

    function reportSubmit(e) {
        //e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
    }

    function handleFilesUpload(e) {
        handleImages((prev) => [
            ...prev,
            { waterMark: e.target.id, pictures: Array.from(e.target.files) },
        ]);
    }

    useEffect(() => {
        const companyData = JSON.parse(localStorage.getItem("companyData"));
        setReport(companyData.productos);
    }, []);

    return (
        <form onSubmit={reportSubmit} encType="multipart/form-data">
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
                                        index % 2 === 0
                                            ? `table__row--even-background`
                                            : ""
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
                                                id={row.id}
                                                accept="image/png, image/jpeg, image/jpg"
                                                required
                                                multiple
                                                disabled={!uploadEnabled}
                                                onChange={handleFilesUpload}
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
