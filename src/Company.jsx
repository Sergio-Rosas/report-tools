import { useState } from "react";
export default function Company({ companyName, handleName }) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }
    return (
        <div className="form-container">
            {!companyName ? (
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
                        onClick={() => handleName(name)}
                    >
                        Confirmar
                    </button>
                </div>
            ) : (
                <div className="form form-container">
                    <h2 className="title title--template">{name}</h2>
                </div>
            )}
        </div>
    );
}
