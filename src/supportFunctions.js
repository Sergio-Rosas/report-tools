const MONTH_CONVERTER = {
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

class DateFormat {
    static MONTH_CONVERTER = {
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

    constructor(date) {
        this.date = new Date(date);
    }

    fullMonth() {
        return DateFormat.MONTH_CONVERTER[this.date.getMonth()];
    }

    shortMonth() {
        return this.fullMonth().slice(0, 3);
    }

    fullYear() {
        return this.date.getFullYear();
    }

    shortYear() {
        return String(this.fullYear()).slice(2, 4);
    }

    day() {
        return this.date.getDate();
    }
}

export { MONTH_CONVERTER as monthConverter, removeDuplicates, DateFormat };
