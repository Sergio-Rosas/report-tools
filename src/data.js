export default function data() {
    const inspeccionCompleta = [
        [
            "CONDICIÓN DE LAS ETIQUETAS",
            "El lote es legible",
            "El serial es legible",
            "La fecha de fabricación es legible",
            "La etiqueta esta completa",
        ],
        [
            "CONDICIÓN ELEMENTOS TEXTILES",
            "El material se encuentra sin restos de pintura o cemento",
            "Reatas o cuerdas sin desgaste",
            "Reatas o cuerdas sin estiramientos excesivos",
            "Reatas o cuerdas sin cortes",
            "Reatas no deshilachadas",
            "Reatas sin rastros de químicos",
            "Reatas sin quemaduras",
            "Cuenta con el alma completa",
            "El absorbedor no se encuentra, impactado, roto, cortado o deformado",
        ],
        [
            "CONDICIÓN DE LAS COSTURAS",
            "Costuras sin cortes o rupturas del tejido",
            "Costuras sin estiramientos excesivos",
            "Sin Costuras faltantes",
            "Costura del testigo de impacto no desgarrada o rota",
            "Costuras no contaminadas y sin presencia de químicos",
            "Costuras sin quemaduras",
            "Costuras sin ataques con químicos.",
        ],
        [
            "CONDICIÓN DE LAS PIEZAS METÁLICAS",
            "Sin deformaciones o desgaste excesivo",
            "Sin Picaduras, grietas o fisuras",
            "Sin corrosión por exposición a ácidos, productos químicos o hidrocarburos",
            "Correcta apertura de los ganchos y/o mosquetones",
            "Correcto cierre de los ganchos y/o mosquetones",
            "Sin remaches ausentes o deformes",
            "Ajuste adecuado de los resortes",
        ],
        [
            "CONDICIÓN DE LAS PIEZAS DIELÉCTRICAS Y PLÁSTICOS",
            "Sin deformaciones ni desgaste excesivo",
            "Sin picaduras, grietas o fisuras",
            "Los plásticos sin roturas",
            "Guardacabos o protector de cuerda sin roturas o ausente",
            "Se encuentra el roller protector de la argolla sin roturas",
            "Sin cortaduras",
            "Otro ¿Cuál?",
        ],
        [
            "CONDICIÓN DEL CUERPO (Accesorios Metálicos)",
            "El estado de la leva y eje del freno es bueno y funcional",
            "La leva rota correctamente",
            "El cuerpo no esta desgastado",
            "La abertura del cuerpo es la adecuada",
            "No presentan desgaste o doblamiento",
            "La rotación de la polea es la adecuada",
            "El estado de las roldanas de la polea es bueno y funcional",
            "El estado de la placa de la polea es bueno y funcional",
            "La roldana gira libremente (polea)",
            "No se presenta desgaste en la placa y/o roldana (polea)",
            "otros ¿Cuál?",
        ],
    ];

    const info = inspeccionCompleta.map((elem) => {
        return {
            title: elem[0],
            elems: elem.slice(1).map((e) => {
                return {
                    name: e,
                    status: "cumple",
                };
            }),
        };
    });
    console.log(info);
}
