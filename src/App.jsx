// npm run dev
// TODO Mobile compatibility.
// TODO The template component need to show the company name and the products evaluated.
//   Use localStorage for that.
import { useState } from "react";

import Header from "./Header";
import MainForm from "./MainForm";
import Templates from "./Templates";
import Company from "./Company";

function App() {
    const [templateSelected, setTemplateSelected] = useState("");
    const [companyName, setCompanyName] = useState("");

    return (
        <>
            <Header />
            <Company companyName={companyName} handleName={setCompanyName} />
            {!templateSelected && companyName ? (
                <Templates handleTemplate={setTemplateSelected} />
            ) : companyName ? (
                <article className="form-container">
                    <MainForm
                        template={templateSelected}
                        handleTemplate={setTemplateSelected}
                    />
                </article>
            ) : (
                ""
            )}
        </>
    );
}

export default App;
