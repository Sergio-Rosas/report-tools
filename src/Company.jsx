import { useState, useEffect, useRef } from "react";
export default function Company({ handleName }) {
    const [name, setName] = useState("");
    const [data, setData] = useState({});
    const currentData = useRef({});

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit() {
        handleName(name);
        setData((prev) => ({
            ...prev,
            nombre: name,
            productos: [],
        }));
    }

    useEffect(() => {
        currentData.current = JSON.parse(localStorage.getItem("companyData"));
        if (currentData.current) {
            handleName(currentData.current.nombre);
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
                <div className="form form-container">
                    <label className="gap-space">
                        Nombre de la empresa:
                        <input
                            type="text"
                            value={name}
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        className="button button--save"
                        onClick={handleSubmit}
                    >
                        Confirmar
                    </button>
                </div>
            ) : (
                <div className="form form-container">
                    <h2 className="title title--template">{data.nombre}</h2>
                </div>
            )}
        </div>
    );
}
