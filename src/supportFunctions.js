const monthConverter = {
    0: "ENERO",
    1: "FEBRERO",
    2: "MARZO",
    3: "ABRIL",
    4: "MAYO",
    5: "JUNIO",
    6: "JULIO",
    7: "AGOSTO",
    8: "SEPTIEMBRE",
    9: "OCTUBRE",
    10: "NOVIEMBRE",
    11: "DICIEMBRE",
};

function removeDuplicates(objectsArray, prop) {
    return Array.from(new Set(objectsArray.map((obj) => obj[prop]))).map(
        (selector) => objectsArray.findLast((item) => item[prop] === selector),
    );
}

export { monthConverter, removeDuplicates };
