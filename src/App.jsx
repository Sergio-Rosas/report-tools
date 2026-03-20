// npm run dev
// TODO Mobile compatibility.
// TODO Offer the option to edit and delete an entry in the report table.
import { useState } from "react";

import Header from "./Header";
import MainForm from "./MainForm";
import Templates from "./Templates";
import Company from "./Company";
import Report from "./Report";

function App() {
    const [templateSelected, setTemplateSelected] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [enabled, setEnabled] = useState(false);

    return (
        <>
            <Header />
            {!templateSelected && <Company handleName={setCompanyName} />}
            {!templateSelected && companyName ? (
                <Templates
                    handleTemplate={setTemplateSelected}
                    handleEnabled={enabled}
                />
            ) : companyName ? (
                <article className="form-container">
                    <MainForm
                        template={templateSelected}
                        handleTemplate={setTemplateSelected}
                        companyName={companyName}
                    />
                </article>
            ) : (
                ""
            )}
            <article className="form-container">
                {!templateSelected && companyName && (
                    <Report
                        uploadEnabled={enabled}
                        setUploadEnabled={setEnabled}
                    />
                )}
            </article>
        </>
    );
}

export default App;
