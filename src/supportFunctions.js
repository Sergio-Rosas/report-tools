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

    day() {
        return this.date.getUTCDate();
    }

    fullMonth() {
        return DateFormat.MONTH_CONVERTER[this.date.getUTCMonth()];
    }

    shortMonth() {
        return this.fullMonth().slice(0, 3);
    }

    fullYear() {
        return this.date.getUTCFullYear();
    }

    shortYear() {
        return String(this.fullYear()).slice(2, 4);
    }
}

export { removeDuplicates, DateFormat };
