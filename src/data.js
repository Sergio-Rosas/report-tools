const data = [
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
];

export default data;
