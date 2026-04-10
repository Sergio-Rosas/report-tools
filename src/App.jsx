// npm run dev
// TODO Mobile compatibility.
// TODO Offer the option to edit and delete an entry in the report table.
// TODO A way to update the company name.
// TODO Optimize components, like functions only doing one thing, the date process in a function outside components, etc.
// TODO Better CSS to the report options (opacity, translation, etc).
// TODO Put the required property for the images upload input.
// TODO For PDF-lib research if text can have enhancements like shadows, etc.
// TODO The PNG generate by html-to-png library is not accurate due to the grid spaces.
// TODO Put failsafes if the image is not a PNG.
// TODO Loading while generating the report.
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
    const [reportView, setReportView] = useState(false);

    return (
        <>
            <Header />
            {!reportView && (
                <div>
                    {!templateSelected && (
                        <Company
                            handleName={setCompanyName}
                            handleDate={setInspDate}
                        />
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
                                tableAlone={false}
                                uploadEnabled={enabled}
                                setUploadEnabled={setEnabled}
                                handleImages={setImagesData}
                                handleView={setReportView}
                            />
                        )}
                    </article>
                </div>
            )}
            {reportView && (
                <ReportTable
                    imagesData={imagesData}
                    inspectionDate={inspDate}
                    company={companyName}
                >
                    <Report tableAlone={true} />
                </ReportTable>
            )}
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
            id: "IN8004-25028-1673-MAR22-NO CONTINUA",
        },
        {
            "fecha-fabricacion": "2022-03-01",
            referencia: "IN8004",
            lote: "25028",
            serie: "1689",
            servicio: "NO CONTINUA",
            id: "IN8004-25028-1689-MAR22-NO CONTINUA",
        },
        {
            "fecha-fabricacion": "2022-03-01",
            referencia: "IN8004",
            lote: "25028",
            serie: "850",
            servicio: "CONTINUA",
            id: "IN8004-25028-850-MAR22-CONTINUA",
        },
        {
            "fecha-fabricacion": "2025-04-01",
            referencia: "IN8009M",
            lote: "45344",
            serie: "6",
            servicio: "CONTINUA",
            id: "IN8009M-45344-6-ABR25-CONTINUA",
        },
        {
            "fecha-fabricacion": "2022-07-01",
            referencia: "IN8020C",
            lote: "26973",
            serie: "1",
            servicio: "CONTINUA",
            id: "IN8020C-26973-1-JUL22-CONTINUA",
        },
        {
            "fecha-fabricacion": "2022-07-01",
            referencia: "IN8020PR",
            lote: "27019",
            serie: "2",
            servicio: "CONTINUA",
            id: "IN8020PR-27019-2-JUL22-CONTINUA",
        },
        {
            "fecha-fabricacion": "2022-02-01",
            referencia: "IN8021",
            lote: "24834",
            serie: "258",
            servicio: "CONTINUA",
            id: "IN8021-24834-258-FEB22-CONTINUA",
        },
        {
            "fecha-fabricacion": "2022-02-01",
            referencia: "IN8041R",
            lote: "24703",
            serie: "926",
            servicio: "CONTINUA",
            id: "IN8041R-24703-926-FEB22-CONTINUA",
        },
        {
            "fecha-fabricacion": "2022-02-01",
            referencia: "IN8041R",
            lote: "24703",
            serie: "936",
            servicio: "CONTINUA",
            id: "IN8041R-24703-936-FEB22-CONTINUA",
        },
        {
            "fecha-fabricacion": "2023-10-01",
            referencia: "IN8042R",
            lote: "34747",
            serie: "201",
            servicio: "CONTINUA",
            id: "IN8042R-34747-201-OCT23-CONTINUA",
        },
        {
            "fecha-fabricacion": "2023-10-01",
            referencia: "IN8042RD",
            lote: "34619",
            serie: "2",
            servicio: "CONTINUA",
            id: "IN8042RD-34619-2-OCT23-CONTINUA",
        },
    ],
};
*/
