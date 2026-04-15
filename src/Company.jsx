import { useState, useEffect, useRef } from "react";
export default function Company({ handleName, handleDate }) {
    const [name, setName] = useState("");
    const [inspectionDate, setInspectionDate] = useState("");
    const [data, setData] = useState({});
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

    useEffect(() => {
        currentData.current = JSON.parse(localStorage.getItem("companyData"));
        if (currentData.current) {
            handleName(currentData.current.nombre);
            handleDate(currentData.current["fecha-inspeccion"]);
            setData(() => ({
                ...currentData.current,
            }));
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
                <div className="form form-container">
                    <h2 className="title title--template">{data.nombre}</h2>
                    <button className="button button--back button--small button--floating company-floating-button">
                        Editar
                    </button>
                </div>
            )}
        </div>
    );
}
