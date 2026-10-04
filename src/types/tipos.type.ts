export interface Tipo {
    title: string,
    bgColor: string,
    textColor: string
}


export const TipoGastos = {
    ingreso: {
        title: "Ingreso",
        bgColor: "#E8F8F0",
        textColor: "green"
    },
    gasto: {
        title: "Gasto",
        bgColor: "#FDECEC",
        textColor: "red"
    }
} satisfies Record<string, Tipo>

export type TypesTiposGastos = keyof typeof TipoGastos