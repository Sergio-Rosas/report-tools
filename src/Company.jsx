import { useState, useEffect, useRef } from "react";
export default function Company({ handleName, handleDate }) {
    const [name, setName] = useState("");
    const [inspectionDate, setInspectionDate] = useState("");
    const [data, setData] = useState({});
    const [coordinates, setCoordinates] = useState({});
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [companyNameChange, setCompanyNameChange] = useState("");
    const currentData = useRef({});

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDateChange(e) {
        setInspectionDate(e.target.value);
    }

    function handleSubmit() {
        handleName(name);
        handleDate(inspectionDate);
        setData((prev) => ({
            ...prev,
            nombre: name.toUpperCase(),
            "fecha-inspeccion": inspectionDate,
            productos: [],
        }));
    }

    function getPosition(e) {
        setCoordinates(e.target.getBoundingClientRect());
        setButtonVisibility(true);
    }

    function visibilityOff() {
        setButtonVisibility(false);
    }

    function editCompanyName() {
        setEditMode(true);
    }

    function confirmEdit() {
        setEditMode(false);
        setName(companyNameChange);
        handleName(companyNameChange);
        setData((prev) => ({
            ...prev,
            nombre: companyNameChange,
        }));
    }

    useEffect(() => {
        currentData.current = JSON.parse(localStorage.getItem("companyData"));
        if (currentData.current) {
            handleName(currentData.current.nombre);
            handleDate(currentData.current["fecha-inspeccion"]);
            setData(() => ({
                ...currentData.current,
            }));
            setCompanyNameChange(() => currentData.current.nombre);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "companyData",
            JSON.stringify({ ...currentData.current, ...data }),
        );
    }, [data]);

    return (
        <div className="form-container">
            {!data.nombre ? (
                <form action={handleSubmit}>
                    <div className="form form-container">
                        <label className="gap-space">
                            Nombre de la empresa:
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </label>
                        <label className="gap-space">
                            Fecha de la revisión
                            <input
                                type="date"
                                value={inspectionDate}
                                onChange={handleDateChange}
                                required
                            />
                        </label>
                        <button className="button button--save">
                            Confirmar
                        </button>
                    </div>
                </form>
            ) : (
                <div
                    className="form form-container"
                    onMouseLeave={visibilityOff}
                >
                    <div className="form-container--title">
                        {editMode ? (
                            <input
                                className="edit"
                                style={{ inlineSize: coordinates.width }}
                                type="text"
                                value={companyNameChange}
                                onChange={(e) =>
                                    setCompanyNameChange(e.target.value)
                                }
                                onMouseEnter={getPosition}
                            />
                        ) : (
                            <h2
                                className="title title--template title--clickable"
                                onMouseEnter={getPosition}
                            >
                                {data.nombre}
                            </h2>
                        )}
                        {editMode ? (
                            <button
                                className={`button button--save button--small button--floating`}
                                style={{
                                    insetInlineStart: coordinates.width + 10,
                                    insetBlockStart: coordinates.height / 2,
                                }}
                                onClick={confirmEdit}
                            >
                                Aceptar
                            </button>
                        ) : (
                            buttonVisibility && (
                                <button
                                    className={`button button--back button--small button--floating`}
                                    style={{
                                        insetInlineStart:
                                            coordinates.width + 10,
                                        insetBlockStart: coordinates.height / 2,
                                    }}
                                    onClick={editCompanyName}
                                >
                                    Editar
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
