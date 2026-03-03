import { PDFDocument } from "pdf-lib";

async function pdfUpdate() {
    const pdfUrl = await fetch("./public/template.pdf");
    const pdfBytes = await pdfUrl.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();

    form.getFields().forEach((field, i) => {
        const type = field.constructor.name;
        const name = field.getName();
        console.log(`${i + 1}. [${type}] ${name}`);
    });
}

export { pdfUpdate };
