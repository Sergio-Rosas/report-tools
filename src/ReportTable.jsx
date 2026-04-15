import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import InputChange from "./InputChange";
import { DateFormat } from "./supportFunctions";
import { pdfCreation } from "./pdfUpdate";
import Loading from "./Loading";

export default function ReportTable({
    children,
    imagesData,
    inspectionDate,
    company,
}) {
    const inspDate = new DateFormat(inspectionDate);
    const [offset, setOffset] = useState(515);
    const [imageOpacity, setImageOpacity] = useState(100);
    const [tableOpacity, setTableOpacity] = useState(60);
    const [loading, setLoading] = useState(false);
    const intervalRef = useRef(null);
    const tableDomNode = useRef(null);

    function verticalOffset(e) {
        if (e.target.name === "up") {
            intervalRef.current = setInterval(
                () => setOffset((prev) => prev - 1),
                50,
            );
        } else {
            intervalRef.current = setInterval(
                () => setOffset((prev) => prev + 1),
                50,
            );
        }
    }

    function stopOffset() {
        clearInterval(intervalRef.current);
    }

    function imageOpacityChange(e) {
        if (e.target.value < 20 || e.target.value > 100) {
            return;
        }
        setImageOpacity(Number(e.target.value));
    }

    function tableOpacityChange(e) {
        if (e.target.value < 20 || e.target.value > 100) {
            return;
        }
        setTableOpacity(Number(e.target.value));
    }

    async function reportCreation() {
        const reportGeneration = confirm(
            "A continuación el reporte será generado para su descarga y la sesión se borrará.\n¿Está seguro que desea continuar?",
        );
        if (!reportGeneration) return;

        setLoading(true);

        const tablePic = await toPng(tableDomNode.current, {
            width: 720,
            height: 1280,
            skipAutoScale: true,
        });

        await pdfCreation(
            company,
            new DateFormat(inspectionDate),
            tablePic,
            imagesData,
        );

        setLoading(false);
    }

    return (
        <>
            {loading && <Loading />}
            <div className="report">
                <div className="form-container--margin">
                    <div className="form-container" ref={tableDomNode}>
                        <img
                            className="certification__image"
                            style={{ opacity: imageOpacity / 100 }}
                            src="/certification.png"
                            alt="Certification"
                        />
                        <div
                            className="report-title"
                            style={{
                                opacity: tableOpacity / 100,
                            }}
                        >
                            <h2>
                                Inspección de equipos de la marca INSAFE -{" "}
                                {`${inspDate.day()} DE ${inspDate.fullMonth()} DE ${inspDate.fullYear()}`}{" "}
                                a la empresa {company.toUpperCase()}.{" "}
                                <p>
                                    Válido hasta{" "}
                                    {`${inspDate.fullMonth()} DE ${Number(inspDate.fullYear()) + 1}.`}
                                </p>
                            </h2>
                            <h2 className="report-title--uppercase">
                                Esta inspección no tiene costo
                            </h2>
                        </div>
                        <div
                            className="report-container"
                            style={{
                                insetBlockStart: `${offset}px`,
                                opacity: tableOpacity / 100,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
                <div className="flex-container--vertical">
                    <div>
                        <p className="subtitle">Desplazar tabla:</p>
                        <div className="flex-container--vertical">
                            <button
                                className={`button button--back button--small ${loading ? "button--disabled" : ""}`}
                                onMouseDown={verticalOffset}
                                onMouseUp={stopOffset}
                                name="up"
                                disabled={loading}
                            >
                                ▲
                            </button>
                            <button
                                className={`button button--back button--small ${loading ? "button--disabled" : ""}`}
                                onMouseDown={verticalOffset}
                                onMouseUp={stopOffset}
                                name="down"
                                disabled={loading}
                            >
                                ▼
                            </button>
                        </div>
                    </div>
                    <InputChange
                        text="Opacidad del certificado:"
                        numberValue={imageOpacity}
                        handleChange={imageOpacityChange}
                        disabled={loading}
                    />
                    <InputChange
                        text="Opacidad de la tabla:"
                        numberValue={tableOpacity}
                        handleChange={tableOpacityChange}
                        disabled={loading}
                    />
                    <button
                        className={`button button--save ${loading ? "button--disabled" : ""}`}
                        onClick={reportCreation}
                        disabled={loading}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </>
    );
}
