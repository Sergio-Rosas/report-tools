import { useState, useRef } from "react";
export default function Templates() {
    const selectedTemplate = useRef("");

    function temp(form) {}

    return (
        <form action={temp} className="select-form">
            <select
                name="template"
                id="template"
                onChange={(e) => (selectedTemplate.current = e.target.value)}
            >
                <option value="seleccion" disabled defaultValue>
                    Seleccione una plantilla
                </option>
                <option value="Adaptador de anclaje">
                    Adaptador de anclaje
                </option>
                <option value="Arnes">Arnes</option>
                <option value="Cuerda semiestatica de 11mm">Cuerda</option>
                <option value="En blanco">En blanco</option>
                <option value="Eslinga con absorbedor de impacto">
                    Eslinga con absorbedor de impacto
                </option>
                <option value="Eslinga de posicionamiento">
                    Eslinga con posicionamiento
                </option>
                <option value="Freno arrestador automatico">Freno</option>
                <option value="Mosqueton carabinero automatico">
                    Mosqueton
                </option>
                <option value="Polea">Polea</option>
            </select>
            <div className="buttons">
                <button>Acceder</button>
            </div>
        </form>
    );
}
