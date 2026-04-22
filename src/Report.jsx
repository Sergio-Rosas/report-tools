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
    const [selectedRow, setSelectedRow] = useState("");

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
        const confirmation = confirm(
            "Continuará a generación en PDF del reporte y no podrá volver para añadir más fotografías, ¿está seguro de querer continuar?",
        );
        confirmation && handleView(true);
    }

    function handleFilesUpload(e) {
        const allowedTypes = ["image/png", "image/jpeg"];

        if (e.target.files.length > 4) {
            e.preventDefault();
            e.target.value = "";
            alert("¡Solo se pueden subir 4 imágenes por producto!");
            return;
        }

        if (e.target.files.length > 1) {
            for (const file of e.target.files) {
                if (!allowedTypes.includes(file.type)) {
                    e.target.value = "";
                    alert(
                        "Solamente se pueden subir imágenes de tipo PNG o JPG/JPEG.",
                    );
                    return;
                }
            }
        } else {
            if (!allowedTypes.includes(e.target.files[0].type)) {
                e.target.value = "";
                alert(
                    "Solamente se pueden subir imágenes de tipo PNG o JPG/JPEG.",
                );
                return;
            }
        }

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

    function deleteRow(rowId) {
        const deletion = confirm(
            "¿Está seguro de eliminar la fila seleccionada?",
        );
        if (deletion) {
            const newReport = report.filter((row) => row.id !== rowId);
            setReport(newReport);
            const companyData = JSON.parse(localStorage.getItem("companyData"));
            localStorage.setItem(
                "companyData",
                JSON.stringify({ ...companyData, productos: newReport }),
            );
        }
    }

    useEffect(() => {
        const companyData = JSON.parse(localStorage.getItem("companyData"));
        /* Delete after pagination is created.
        if (companyData.productos.length > 11) {
            setUploadEnabled(!uploadEnable);
        }
         */
        setReport(companyData.productos);
    }, []);

    return (
        <form
            onSubmit={reportSubmit}
            encType="multipart/form-data"
            style={{ marginBlockEnd: "20px" }}
        >
            {report.length > 0 && (
                <div>
                    <table className={tableAlone ? "report-table" : ""}>
                        {!tableAlone && <caption>Productos Evaluados:</caption>}
                        <thead>
                            <tr>
                                {!tableAlone && <th>Estado</th>}
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
                                        {!tableAlone && (
                                            <td
                                                style={{
                                                    cursor: uploadEnabled
                                                        ? "not-allowed"
                                                        : "pointer",
                                                }}
                                                onClick={() =>
                                                    !uploadEnabled &&
                                                    deleteRow(row.id)
                                                }
                                                onMouseEnter={() =>
                                                    setSelectedRow(row.id)
                                                }
                                                onMouseLeave={() =>
                                                    setSelectedRow("")
                                                }
                                            >
                                                {selectedRow === row.id &&
                                                !uploadEnabled
                                                    ? "❌"
                                                    : "✅"}
                                            </td>
                                        )}
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
