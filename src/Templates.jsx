import { useRef } from "react";
export default function Templates({ handleTemplate }) {
    const selectedTemplate = useRef("");

    function processTemplate() {
        handleTemplate(selectedTemplate.current);
    }

    return (
        <form action={processTemplate} className="select-form">
            <select
                name="template"
                id="template"
                onChange={(e) => (selectedTemplate.current = e.target.value)}
            >
                <option value="seleccion" disabled selected>
                    Seleccione una plantilla
                </option>
                <option value="Adaptador de anclaje">
                    Adaptador de anclaje
                </option>
                <option value="Arnes">Arnes</option>
                <option value="Cuerda semiestatica de 11mm">
                    Cuerda semiestatica de 11mm
                </option>
                <option value="En blanco">En blanco</option>
                <option value="Eslinga con absorbedor de impacto">
                    Eslinga con absorbedor de impacto
                </option>
                <option value="Eslinga de posicionamiento">
                    Eslinga de posicionamiento
                </option>
                <option value="Freno arrestador automatico">
                    Freno arrestador automatico
                </option>
                <option value="Mosqueton carabinero automatico">
                    Mosqueton carabinero automatico
                </option>
                <option value="Polea">Polea</option>
            </select>
            <div className="buttons">
                <button className="button button--save">Acceder</button>
            </div>
        </form>
    );
}
