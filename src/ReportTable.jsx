import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import InputChange from "./InputChange";
import { DateFormat } from "./supportFunctions";
import { pdfCreation } from "./pdfUpdate";

export default function ReportTable({
    children,
    imagesData,
    inspectionDate,
    company,
}) {
    const temp = false;
    const inspDate = new DateFormat(inspectionDate);
    const [offset, setOffset] = useState(515);
    const [imageOpacity, setImageOpacity] = useState(100);
    const [tableOpacity, setTableOpacity] = useState(60);
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
    }

    return (
        <div className="report">
            {temp &&
                imagesData.map((imagesObj) =>
                    imagesObj.pictures.map((picture) => (
                        <figure>
                            <img
                                src={URL.createObjectURL(picture)}
                                alt="Image"
                                width={350}
                            />
                            <figcaption>{imagesObj.waterMark}</figcaption>
                        </figure>
                    )),
                )}
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
                            //"inset-block-start": `${offset}px`,
                            insetBlockStart: `${offset}px`,
                            opacity: tableOpacity / 100,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Desplazar tabla:</p>
                    <button
                        className="button button--back"
                        onMouseDown={verticalOffset}
                        onMouseUp={stopOffset}
                        name="up"
                    >
                        ▲
                    </button>
                    <button
                        className="button button--back"
                        onMouseDown={verticalOffset}
                        onMouseUp={stopOffset}
                        name="down"
                    >
                        ▼
                    </button>
                </div>
                <InputChange
                    text="Opacidad del certificado:"
                    numberValue={imageOpacity}
                    handleChange={imageOpacityChange}
                />
                <InputChange
                    text="Opacidad de la tabla:"
                    numberValue={tableOpacity}
                    handleChange={tableOpacityChange}
                />
                <button
                    className="button button--save"
                    onClick={reportCreation}
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
}
