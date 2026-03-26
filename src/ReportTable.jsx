import { useState, useRef } from "react";

export default function ReportTable({ children, imagesData }) {
    const temp = false;
    const [offset, setOffset] = useState(520);
    const intervalRef = useRef(null);

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

    return (
        <div className="form-container">
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
            <img
                className="certification__image"
                src="/certification.png"
                alt="Certification"
            />
            <button
                onMouseDown={verticalOffset}
                onMouseUp={stopOffset}
                name="up"
            >
                ▲
            </button>
            <button
                onMouseDown={verticalOffset}
                onMouseUp={stopOffset}
                name="down"
            >
                ▼
            </button>
            <div
                className="report-container"
                style={{ "inset-block-start": `${offset}px` }}
            >
                {children}
            </div>
        </div>
    );
}
