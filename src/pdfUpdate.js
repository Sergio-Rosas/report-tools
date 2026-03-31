import { PDFDocument, PDFName, PDFBool, StandardFonts, rgb } from "pdf-lib";
import { monthConverter, DateFormat } from "./supportFunctions";

function pdfDownloader(pdf, filename) {
    const blob = new Blob([pdf], {
        type: "application/pdf",
        //endings: "transparent",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

async function pdfUpdate(form, type = false) {
    const conditionsNumber = [4, 9, 7, 7, 7, 11];
    const fieldNames = [
        [
            [37, 35, 36, 4],
            [38, 41, 44, 1],
            [39, 42, 45, 2],
            [40, 43, 46, 3],
        ],
        [
            [47, 56, 65, 5],
            [48, 57, 66, 6],
            [49, 58, 67, 7],
            [50, 59, 68, 8],
            [51, 60, 69, 9],
            [52, 61, 70, 10],
            [53, 62, 71, 11],
            [54, 63, 72, 12],
            [55, 64, 73, 23],
        ],
        [
            [74, 75, 76, 13],
            [77, 83, 89, 14],
            [78, 84, 90, 15],
            [79, 85, 91, 16],
            [80, 86, 92, 17],
            [81, 87, 93, 18],
            [82, 88, 94, 19],
        ],
        [
            [95, 96, 97, 20],
            [98, 99, 100, 21],
            [101, 102, 103, 22],
            [104, 108, 112, 24],
            [105, 109, 113, 25],
            [106, 110, 114, 26],
            [107, 111, 115, 27],
        ],
        [
            [116, 117, 118, 28],
            [119, 120, 121, 29],
            [122, 123, 124, 30],
            [125, 126, 127, 31],
            [128, 129, 130, 32],
            [131, 132, 133, 33],
            [134, 135, 136, 34],
        ],
        [
            [137, 138, 139, 184],
            [140, 150, 160, 172],
            [141, 151, 161, 175],
            [142, 152, 162, 176],
            [143, 153, 163, 177],
            [144, 154, 164, 178],
            [145, 155, 165, 179],
            [146, 156, 166, 180],
            [147, 157, 167, 181],
            [148, 158, 168, 182],
            [149, 159, 169, 183],
        ],
    ];
    const pdfUrl = await fetch("/template.pdf");
    const pdfBytes = await pdfUrl.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
    const pdfForm = pdfDoc.getForm();

    // Filling field by field.
    switch (form.usuario) {
        case "fabricante":
            pdfForm.getCheckBox("untitled200").check();
            break;
        case "distribuidor":
            pdfForm.getCheckBox("untitled201").check();
            break;
        case "consumidor":
            pdfForm.getCheckBox("untitled202").check();
            break;
    }
    pdfForm.getTextField("untitled192").setText(form.empresa.toUpperCase());
    const fabricationDate = new DateFormat(form["fecha-fabricacion"]);
    pdfForm
        .getTextField("untitled196")
        .setText(
            `${fabricationDate.fullMonth()} DE ${fabricationDate.fullYear()}`,
        );
    pdfForm
        .getTextField("untitled193")
        .setText(form.distribuidor.toUpperCase());
    pdfForm.getTextField("untitled197").setText(form.referencia.toUpperCase());
    const inspectionDate = new DateFormat(form["fecha-inspeccion"]);
    pdfForm
        .getTextField("untitled194")
        .setText(
            `${inspectionDate.day()} DE ${inspectionDate.fullMonth()} DE ${inspectionDate.fullYear()}`,
        );
    pdfForm.getTextField("untitled198").setText(form.lote.toUpperCase());
    pdfForm.getTextField("untitled195").setText(form.producto.toUpperCase());
    pdfForm.getTextField("untitled199").setText(form.serie.toUpperCase());
    for (let i = 0; i < conditionsNumber.length; i++) {
        for (let j = 1; j <= conditionsNumber[i]; j++) {
            switch (form[`${i + 1}.${j}`]) {
                case "cumple":
                    pdfForm
                        .getCheckBox(`untitled${fieldNames[i][j - 1][0]}`)
                        .check();
                    break;
                case "no cumple":
                    pdfForm
                        .getCheckBox(`untitled${fieldNames[i][j - 1][1]}`)
                        .check();
                    break;
                case "no aplica":
                    pdfForm
                        .getCheckBox(`untitled${fieldNames[i][j - 1][2]}`)
                        .check();
                    break;
            }
            pdfForm
                .getTextField(`untitled${fieldNames[i][j - 1][3]}`)
                .setText(form[`observaciones ${i + 1}.${j}`].toUpperCase());
        }
    }
    if (form.servicio === "continua") {
        pdfForm.getCheckBox("untitled170").check();
    } else {
        pdfForm.getCheckBox("untitled171").check();
    }
    pdfForm.getTextField("untitled185").setText(form.informe);

    if (type) {
        //pdfForm.flatten({ updateFieldAppearances: true });
        pdfForm.getFields().forEach((field) => field.enableReadOnly());
        // Adding the signature.
        const imageUrl = await fetch("/signature.png");
        const imageBytes = await imageUrl.arrayBuffer();
        const image = await pdfDoc.embedPng(imageBytes);
        const jpgDims = image.scale(0.5);
        const pages = pdfDoc.getPages();
        const secondPage = pages[1];
        secondPage.drawImage(image, {
            x: 60,
            y: 290,
            width: jpgDims.width,
            height: jpgDims.height,
            opacity: 1.0,
        });
    }

    pdfForm.updateFieldAppearances();

    pdfDoc
        .getForm()
        .acroForm.dict.set(PDFName.of("NeedAppearances"), PDFBool.True);

    const modifiedDoc = await pdfDoc.save({
        useObjectStreams: false,
        //addDefaultPage: false,
        //objectsPerTick: 100,
        //updateFieldAppearances: false,
    });

    pdfDownloader(
        modifiedDoc,
        `${form.referencia.toUpperCase()}-${form.lote.toUpperCase()}-${form.serie.toUpperCase()}-${fabricationDate.shortMonth()}${fabricationDate.shortYear()}-${form.servicio.toUpperCase()}.pdf`,
    );
}

async function pdfCreation(companyName, inspectionDate) {
    const document = await PDFDocument.create();
    const helveticaFont = await document.embedFont(StandardFonts.Helvetica);
    const helveticaBoldFont = await document.embedFont(
        StandardFonts.HelveticaBold,
    );

    const page = document.addPage([540, 960]); // Size in points equivalent to 720px and 1280px respectively.
    const { width, height } = page.getSize();
    const fontSize = 21;

    // Adding the background image.
    const imageUrl = await fetch("/opening.png");
    const imageBytes = await imageUrl.arrayBuffer();
    const image = await document.embedPng(imageBytes);
    const pages = document.getPages();
    const firstPage = pages[0];
    firstPage.drawImage(image, {
        x: 0,
        y: 0,
        width: 540,
        height: 960,
    });

    page.drawText(
        `INSPECCIÓN DE EQUIPOS INSAFE REALIZADO A LA EMPRESA:\n${companyName.toUpperCase()}\nREALIZADO EL:\n${inspectionDate.day()} DE ${inspectionDate.fullMonth()} DE ${inspectionDate.fullYear()}`,
        {
            x: 20,
            y: 610,
            size: fontSize,
            font: helveticaBoldFont,
            maxWidth: 520,
            wordBreaks: [" ", "-" /*, "\n"*/],
            //color: rgb(0, 0.53, 0.71),
        },
    );

    const pdfBytes = await document.save();
    pdfDownloader(pdfBytes, "REPORTE.pdf");
}

export { pdfUpdate, pdfCreation };
