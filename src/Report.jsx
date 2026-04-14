import { useState, useEffect } from "react";
import { removeDuplicates, DateFormat } from "./supportFunctions";

export default function Report({
    tableAlone,
    uploadEnabled,
    setUploadEnabled,
    handleImages,
    handleView,
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
        e.preventDefault();
        handleView(true);
    }

    function handleFilesUpload(e) {
        handleImages((prev) => {
            const uncleanedArray = [
                ...prev,
                {
                    waterMark: e.target.id,
                    pictures: Array.from(e.target.files),
                },
            ];
            return removeDuplicates(uncleanedArray, "waterMark");
        });
    }

    useEffect(() => {
        const companyData = JSON.parse(localStorage.getItem("companyData"));
        setReport(companyData.productos);
    }, []);

    return (
        <form onSubmit={reportSubmit} encType="multipart/form-data" style={{marginBlockEnd: "20px"}}>
            {report.length > 0 && (
                <div>
                    <table className={tableAlone ? "report-table" : ""}>
                        {!tableAlone && <caption>Productos Evaluados:</caption>}
                        <thead>
                            <tr>
                                <th>Referencia</th>
                                <th>Lote</th>
                                <th>Serial</th>
                                <th>Fecha de Fabricación</th>
                                <th>Concepto</th>
                                {!tableAlone && <th>Imágenes</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {report.map((row, index) => {
                                const buildDate = new DateFormat(
                                    row["fecha-fabricacion"],
                                );
                                return (
                                    <tr
                                        className={
                                            tableAlone
                                                ? ""
                                                : index % 2 === 0
                                                  ? `table__row--even-background`
                                                  : ""
                                        }
                                        key={row.id}
                                    >
                                        <td>{row.referencia}</td>
                                        <td>{row.lote}</td>
                                        <td>{row.serie}</td>
                                        <td>{`${buildDate.fullMonth()}-${buildDate.fullYear()}`}</td>
                                        <td>{row.servicio}</td>
                                        {!tableAlone && (
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
                                                        multiple
                                                        disabled={
                                                            !uploadEnabled
                                                        }
                                                        onChange={
                                                            handleFilesUpload
                                                        }
                                                        required
                                                    />
                                                </label>
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {!tableAlone && (
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
                    )}
                </div>
            )}
        </form>
    );
}
