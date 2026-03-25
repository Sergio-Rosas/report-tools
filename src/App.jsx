// npm run dev
// TODO Mobile compatibility.
// TODO I don't know why the company name is kept in the templates but not the inspection date.
// TODO Offer the option to edit and delete an entry in the report table.
// TODO A way to update the company name.
// TODO Optimize components, like functions only doing one thing, the date process in a function outside components, etc.
// TODO Valide the ID on images being the one to rewrite reuploads.
import { useState } from "react";

import Header from "./Header";
import MainForm from "./MainForm";
import Templates from "./Templates";
import Company from "./Company";
import Report from "./Report";
import ReportTable from "./ReportTable";

function App() {
    const [templateSelected, setTemplateSelected] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [enabled, setEnabled] = useState(false);
    const [inspDate, setInspDate] = useState("");
    const [imagesData, setImagesData] = useState([]);

    return (
        <>
            <Header />
            {!templateSelected && (
                <Company handleName={setCompanyName} handleDate={setInspDate} />
            )}
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
                        inspectionDate={inspDate}
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
                        handleImages={setImagesData}
                    />
                )}
            </article>
            <ReportTable imagesData={imagesData} />
        </>
    );
}

export default App;

// Object for the local storage
/*
{
    nombre: "Ciudad Don Bosco",
    "fecha-inspeccion": "2026-02-25",
    productos: [
        {
            "fecha-fabricacion": "2022-03-01",
            referencia: "IN8004",
            lote: "25028",
            serie: "1673",
            servicio: "NO CONTINUA",
            id: "IN8004250281673",
        },
        {
            "fecha-fabricacion": "2022-03-01",
            referencia: "IN8004",
            lote: "25028",
            serie: "1689",
            servicio: "NO CONTINUA",
            id: "IN8004250281689",
        },
        {
            "fecha-fabricacion": "2022-03-01",
            referencia: "IN8004",
            lote: "25028",
            serie: "850",
            servicio: "CONTINUA",
            id: "IN800425028850",
        },
        {
            "fecha-fabricacion": "2025-04-01",
            referencia: "IN8009M",
            lote: "45344",
            serie: "6",
            servicio: "CONTINUA",
            id: "IN8009M453446",
        },
        {
            "fecha-fabricacion": "2022-07-01",
            referencia: "IN8020C",
            lote: "26973",
            serie: "1",
            servicio: "CONTINUA",
            id: "IN8020C269731",
        },
        {
            "fecha-fabricacion": "2022-07-01",
            referencia: "IN8020PR",
            lote: "27019",
            serie: "2",
            servicio: "CONTINUA",
            id: "IN8020PR270192",
        },
        {
            "fecha-fabricacion": "2022-02-01",
            referencia: "IN8021",
            lote: "24834",
            serie: "258",
            servicio: "CONTINUA",
            id: "IN802124834258",
        },
        {
            "fecha-fabricacion": "2022-02-01",
            referencia: "IN8041R",
            lote: "24703",
            serie: "926",
            servicio: "CONTINUA",
            id: "IN8041R24703926",
        },
        {
            "fecha-fabricacion": "2022-02-01",
            referencia: "IN8041R",
            lote: "24703",
            serie: "936",
            servicio: "CONTINUA",
            id: "IN8041R24703936",
        },
        {
            "fecha-fabricacion": "2023-10-01",
            referencia: "IN8042R",
            lote: "34747",
            serie: "201",
            servicio: "CONTINUA",
            id: "IN8042R34747201",
        },
        {
            "fecha-fabricacion": "2023-10-01",
            referencia: "IN8042RD",
            lote: "34619",
            serie: "2",
            servicio: "CONTINUA",
            id: "IN8042RD346192",
        },
    ],
};
*/
