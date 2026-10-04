export interface Categoria {
    title: string,
    bgColor: string;
    textColor: string;

}

export const TiposCategoria: Record<string, Categoria> = {
    ingresos: {
        title: "Ingresos",
        bgColor: "#E8F8F0",
        textColor: "green"
    },
    alimentacion: {
        title: "Alimentación",
        bgColor: "#FDECEC",
        textColor: "red"
    },
    transporte: {
        title: "Transporte",
        bgColor: "#E6F1FF",
        textColor: "blue"
    },
    entretenimiento: {
        title: "Entretenimiento",
        bgColor: "#F1ECFF",
        textColor: "purple"
    },
    servicios: {
        title: "Servicios",
        bgColor: "#FFF3DC",
        textColor: "orange"
    },
}


export type TiposCategoriaStrings = keyof typeof TiposCategoria
