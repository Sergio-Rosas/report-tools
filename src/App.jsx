// npm run dev
// TODO Mobile compatibility.
// TODO The template component need to show the company name and the products evaluated.
//   Use localStorage for that.
import { useState } from "react";

import Header from "./Header";
import MainForm from "./MainForm";
import Templates from "./Templates";
import Company from "./Company";
import Report from "./Report";

function App() {
    const [templateSelected, setTemplateSelected] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [reportData, setReportData] = useState([]);

    return (
        <>
            <Header />
            {!templateSelected && <Company handleName={setCompanyName} />}
            {!templateSelected && companyName ? (
                <Templates handleTemplate={setTemplateSelected} />
            ) : companyName ? (
                <article className="form-container">
                    <MainForm
                        template={templateSelected}
                        handleTemplate={setTemplateSelected}
                        handleReport={setReportData}
                    />
                </article>
            ) : (
                ""
            )}
            <Report reportData={reportData} />
        </>
    );
}

export default App;
