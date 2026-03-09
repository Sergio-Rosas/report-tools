// npm run dev
// TODO Create header with the title of the document.
// TODO When the "guardar" button is clicked the form goes back to the template state.
// TODO Some templates has different text in "Otros ¿Cuál?" option.
import { useState} from "react";

import Header from "./Header";
import MainForm from "./MainForm";
import Templates from "./Templates";

function App() {
    const [templateSelected, setTemplateSelected] = useState("");

    return (
        <>
            <Header />
            {!templateSelected ? (
                <Templates handleTemplate={setTemplateSelected}/>
            ) : (
                <article className="form-container">
                    <MainForm template={templateSelected} />
                </article>
            )}
        </>
    );
}

export default App;
