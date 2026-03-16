// npm run dev
// TODO Mobile compatibility.
// TODO The template component need to show the company name and the products evaluated.
//   Use localStorage for that.
// TODO No blank fields.
// TODO Max size in textarea.
import { useState } from "react";

import Header from "./Header";
import MainForm from "./MainForm";
import Templates from "./Templates";

function App() {
    const [templateSelected, setTemplateSelected] = useState("");

    return (
        <>
            <Header />
            {!templateSelected ? (
                <Templates handleTemplate={setTemplateSelected} />
            ) : (
                <article className="form-container">
                    <MainForm
                        template={templateSelected}
                        handleTemplate={setTemplateSelected}
                    />
                </article>
            )}
        </>
    );
}

export default App;
