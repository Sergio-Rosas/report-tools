/*
const data = [
    {
        name: "Adaptador de anclaje",
        reference: "IN80",
        conclusions:
            "El equipo puede continuar en servicio, se realizan las siguientes recomendaciones para garantizar su conservacion y durabilidad de la vida util:\n- Realizar inspecciones preoperacionales por parte del personal ejecutor de la labor, inspecciones periodicas por parte del area SST de la empresa e inspecciones anuales realizadas por una persona avalada por el fabricante.\n- Realizar limpieza/mantenimiento de manera periodica y adecuado almacenamiento del equipo, de acuerdo a recomendaciones del fabricante.",
        conditions: [
            {
                title: "CONDICIÓN DE LAS ETIQUETAS",
                elems: [
                    {
                        name: "El lote es legible",
                        status: "cumple",
                    },
                    {
                        name: "El serial es legible",
                        status: "cumple",
                    },
                    {
                        name: "La fecha de fabricación es legible",
                        status: "cumple",
                    },
                    {
                        name: "La etiqueta esta completa",
                        status: "cumple",
                    },
                ],
            },
            {
                title: "CONDICIÓN ELEMENTOS TEXTILES",
                elems: [
                    {
                        name: "El material se encuentra sin restos de pintura o cemento",
                        status: "cumple",
                    },
                    {
                        name: "Reatas o cuerdas sin desgaste",
                        status: "cumple",
                    },
                    {
                        name: "Reatas o cuerdas sin estiramientos excesivos",
                        status: "cumple",
                    },
                    {
                        name: "Reatas o cuerdas sin cortes",
                        status: "cumple",
                    },
                    {
                        name: "Reatas no deshilachadas",
                        status: "cumple",
                    },
                    {
                        name: "Reatas sin rastros de químicos",
                        status: "cumple",
                    },
                    {
                        name: "Reatas sin quemaduras",
                        status: "cumple",
                    },
                    {
                        name: "Cuenta con el alma completa",
                        status: "no aplica",
                    },
                    {
                        name: "El absorbedor no se encuentra, impactado, roto, cortado o deformado",
                        status: "no aplica",
                    },
                ],
            },
            {
                title: "CONDICIÓN DE LAS COSTURAS",
                elems: [
                    {
                        name: "Costuras sin cortes o rupturas del tejido",
                        status: "cumple",
                    },
                    {
                        name: "Costuras sin estiramientos excesivos",
                        status: "cumple",
                    },
                    {
                        name: "Sin Costuras faltantes",
                        status: "cumple",
                    },
                    {
                        name: "Costura del testigo de impacto no desgarrada o rota",
                        status: "no aplica",
                    },
                    {
                        name: "Costuras no contaminadas y sin presencia de químicos",
                        status: "cumple",
                    },
                    {
                        name: "Costuras sin quemaduras",
                        status: "cumple",
                    },
                    {
                        name: "Costuras sin ataques con químicos.",
                        status: "cumple",
                    },
                ],
            },
            {
                title: "CONDICIÓN DE LAS PIEZAS METÁLICAS",
                elems: [
                    {
                        name: "Sin deformaciones o desgaste excesivo",
                        status: "cumple",
                    },
                    {
                        name: "Sin Picaduras, grietas o fisuras",
                        status: "cumple",
                    },
                    {
                        name: "Sin corrosión por exposición a ácidos, productos químicos o hidrocarburos",
                        status: "cumple",
                    },
                    {
                        name: "Correcta apertura de los ganchos y/o mosquetones",
                        status: "no aplica",
                    },
                    {
                        name: "Correcto cierre de los ganchos y/o mosquetones",
                        status: "no aplica",
                    },
                    {
                        name: "Sin remaches ausentes o deformes",
                        status: "no aplica",
                    },
                    {
                        name: "Ajuste adecuado de los resortes",
                        status: "no aplica",
                    },
                ],
            },
            {
                title: "CONDICIÓN DE LAS PIEZAS DIELÉCTRICAS Y PLÁSTICOS",
                elems: [
                    {
                        name: "Sin deformaciones ni desgaste excesivo",
                        status: "no aplica",
                    },
                    {
                        name: "Sin picaduras, grietas o fisuras",
                        status: "no aplica",
                    },
                    {
                        name: "Los plásticos sin roturas",
                        status: "no aplica",
                    },
                    {
                        name: "Guardacabos o protector de cuerda sin roturas o ausente",
                        status: "no aplica",
                    },
                    {
                        name: "Se encuentra el roller protector de la argolla sin roturas",
                        status: "no aplica",
                    },
                    {
                        name: "Sin cortaduras",
                        status: "no aplica",
                    },
                    {
                        name: "Otro ¿Cuál?",
                        status: "no aplica",
                    },
                ],
            },
            {
                title: "CONDICIÓN DEL CUERPO (Accesorios Metálicos)",
                elems: [
                    {
                        name: "El estado de la leva y eje del freno es bueno y funcional",
                        status: "no aplica",
                    },
                    {
                        name: "La leva rota correctamente",
                        status: "no aplica",
                    },
                    {
                        name: "El cuerpo no esta desgastado",
                        status: "no aplica",
                    },
                    {
                        name: "La abertura del cuerpo es la adecuada",
                        status: "no aplica",
                    },
                    {
                        name: "No presentan desgaste o doblamiento",
                        status: "no aplica",
                    },
                    {
                        name: "La rotación de la polea es la adecuada",
                        status: "no aplica",
                    },
                    {
                        name: "El estado de las roldanas de la polea es bueno y funcional",
                        status: "no aplica",
                    },
                    {
                        name: "El estado de la placa de la polea es bueno y funcional",
                        status: "no aplica",
                    },
                    {
                        name: "La roldana gira libremente (polea)",
                        status: "no aplica",
                    },
                    {
                        name: "No se presenta desgaste en la placa y/o roldana (polea)",
                        status: "no aplica",
                    },
                    {
                        name: "otros ¿Cuál?",
                        status: "no aplica",
                    },
                ],
            },
        ],
    },
];
 */

const persistentInformation = {
    conclusions:
        "El equipo puede continuar en servicio, se realizan las siguientes recomendaciones para garantizar su conservacion y durabilidad de la vida util:\n- Realizar inspecciones preoperacionales por parte del personal ejecutor de la labor, inspecciones periodicas por parte del area SST de la empresa e inspecciones anuales realizadas por una persona avalada por el fabricante.\n- Realizar limpieza/mantenimiento de manera periodica y adecuado almacenamiento del equipo, de acuerdo a recomendaciones del fabricante.",
    conditions: [
        {
            title: "CONDICIÓN DE LAS ETIQUETAS",
            elems: [
                {
                    name: "El lote es legible",
                },
                {
                    name: "El serial es legible",
                },
                {
                    name: "La fecha de fabricación es legible",
                },
                {
                    name: "La etiqueta esta completa",
                },
            ],
        },
        {
            title: "CONDICIÓN ELEMENTOS TEXTILES",
            elems: [
                {
                    name: "El material se encuentra sin restos de pintura o cemento",
                },
                {
                    name: "Reatas o cuerdas sin desgaste",
                },
                {
                    name: "Reatas o cuerdas sin estiramientos excesivos",
                },
                {
                    name: "Reatas o cuerdas sin cortes",
                },
                {
                    name: "Reatas no deshilachadas",
                },
                {
                    name: "Reatas sin rastros de químicos",
                },
                {
                    name: "Reatas sin quemaduras",
                },
                {
                    name: "Cuenta con el alma completa",
                },
                {
                    name: "El absorbedor no se encuentra, impactado, roto, cortado o deformado",
                },
            ],
        },
        {
            title: "CONDICIÓN DE LAS COSTURAS",
            elems: [
                {
                    name: "Costuras sin cortes o rupturas del tejido",
                },
                {
                    name: "Costuras sin estiramientos excesivos",
                },
                {
                    name: "Sin Costuras faltantes",
                },
                {
                    name: "Costura del testigo de impacto no desgarrada o rota",
                },
                {
                    name: "Costuras no contaminadas y sin presencia de químicos",
                },
                {
                    name: "Costuras sin quemaduras",
                },
                {
                    name: "Costuras sin ataques con químicos.",
                },
            ],
        },
        {
            title: "CONDICIÓN DE LAS PIEZAS METÁLICAS",
            elems: [
                {
                    name: "Sin deformaciones o desgaste excesivo",
                },
                {
                    name: "Sin Picaduras, grietas o fisuras",
                },
                {
                    name: "Sin corrosión por exposición a ácidos, productos químicos o hidrocarburos",
                },
                {
                    name: "Correcta apertura de los ganchos y/o mosquetones",
                },
                {
                    name: "Correcto cierre de los ganchos y/o mosquetones",
                },
                {
                    name: "Sin remaches ausentes o deformes",
                },
                {
                    name: "Ajuste adecuado de los resortes",
                },
            ],
        },
        {
            title: "CONDICIÓN DE LAS PIEZAS DIELÉCTRICAS Y PLÁSTICOS",
            elems: [
                {
                    name: "Sin deformaciones ni desgaste excesivo",
                },
                {
                    name: "Sin picaduras, grietas o fisuras",
                },
                {
                    name: "Los plásticos sin roturas",
                },
                {
                    name: "Guardacabos o protector de cuerda sin roturas o ausente",
                },
                {
                    name: "Se encuentra el roller protector de la argolla sin roturas",
                },
                {
                    name: "Sin cortaduras",
                },
                {
                    name: "Otro ¿Cuál?",
                },
            ],
        },
        {
            title: "CONDICIÓN DEL CUERPO (Accesorios Metálicos)",
            elems: [
                {
                    name: "El estado de la leva y eje del freno es bueno y funcional",
                },
                {
                    name: "La leva rota correctamente",
                },
                {
                    name: "El cuerpo no esta desgastado",
                },
                {
                    name: "La abertura del cuerpo es la adecuada",
                },
                {
                    name: "No presentan desgaste o doblamiento",
                },
                {
                    name: "La rotación de la polea es la adecuada",
                },
                {
                    name: "El estado de las roldanas de la polea es bueno y funcional",
                },
                {
                    name: "El estado de la placa de la polea es bueno y funcional",
                },
                {
                    name: "La roldana gira libremente (polea)",
                },
                {
                    name: "No se presenta desgaste en la placa y/o roldana (polea)",
                },
                {
                    name: "otros ¿Cuál?",
                },
            ],
        },
    ],
};

const templates = [
    {
        name: "Adaptador de anclaje",
        company: "",
        reference: "IN80",
        distributor: "",
        serial: "",
        defaultValues: [
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    },
    {
        name: "Arnes",
        company: "",
        reference: "IN",
        distributor: "N/A",
        serial: "",
        defaultValues: [
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    },
    {
        name: "Cuerda semiestatica de 11mm",
        company: "",
        reference: "IN9011",
        distributor: "N/A",
        serial: "",
        defaultValues: [
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    },
    {
        name: "En blanco",
        company: "",
        reference: "",
        distributor: "",
        serial: "",
        defaultValues: [[], [], [], [], [], []],
    },
    {
        name: "Eslinga con absorbedor de impacto",
        company: "",
        reference: "IN80",
        distributor: "",
        serial: "",
        defaultValues: [
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    },
    {
        name: "Eslinga de posicionamiento",
        company: "",
        reference: "IN80",
        distributor: "",
        serial: "",
        defaultValues: [
            [1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    },
    {
        name: "Freno arrestador automatico",
        company: "",
        reference: "N",
        distributor: "",
        serial: "N/A",
        defaultValues: [
            [1, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        ],
    },
    {
        name: "Mosqueton carabinero automatico",
        company: "Estilo ingenieria",
        reference: "N",
        distributor: "N/A",
        serial: "N/A",
        defaultValues: [
            [1, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        ],
    },
    {
        name: "Polea",
        company: "",
        reference: "IN",
        distributor: "N/A",
        serial: "",
        defaultValues: [
            [1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        ],
    },
];

const data = templates.map((template) => {
    const newTemplate = {
        ...template,
        conditions: template.defaultValues.map((arr, index) => {
            let values = {};
            for (let i = 0; i < arr.length; i++) {
                values = {
                    ...persistentInformation.conditions[index],
                    elems:
                        persistentInformation.conditions[index].elems.map((el, j) => {
                            return {
                                name: el.name,
                                status:
                                    arr[j] === 1
                                        ? "cumple"
                                        : arr[j] === -1
                                            ? "no cumple"
                                            : "no aplica",
                            }
                        }),
                };
            }
            return values;
        }),
    };
    delete newTemplate.defaultValues;
    return newTemplate;
});

export default data;