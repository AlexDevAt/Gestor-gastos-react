import type { Categoria } from "@/types/Categoria.types"
import type { Tipo, TypesTiposGastos } from "@/types/tipos.type"

export interface Gastos {
    id: number
    tipo: TypesTiposGastos,
    cantidad: number,
    fecha: string,
    concepto: string,
    categoria: Categoria
}
