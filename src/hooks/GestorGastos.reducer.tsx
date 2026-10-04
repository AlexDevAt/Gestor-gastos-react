import type { MayorGasto } from "@/components/Estadisticas"
import type { Gastos } from "@/interfaces/Gastos.interface"
import { TiposCategoria } from "@/types/Categoria.types"

const categoriasActuales: string[] = Object.values(TiposCategoria).map((cat) => cat.title)


interface GestorGastosState {
    gastos: Gastos[]
    ingresosTotales: number
    gastosTotales: number
    balance: number
    mayorGastoCategoria: MayorGasto,
}

export const getInitialState = (): GestorGastosState => {
    return {
        gastos: [],
        ingresosTotales: 0,
        gastosTotales: 0,
        balance: 0,
        mayorGastoCategoria: {
            title: "",
            value: 0
        },
    }
}

const obtenerMayorGastoCategoria = (gastos: Gastos[]): MayorGasto => {
    const categorias = new Map<string, number>();

    gastos.forEach((gasto) => {
        if (gasto.tipo !== "gasto") return;

        const anterior = categorias.get(gasto.categoria.title) ?? 0;

        categorias.set(
            gasto.categoria.title,
            anterior + gasto.cantidad
        );
    });
    let mayor: MayorGasto = {
        title: "",
        value: 0
    };

    categorias.forEach((value, key) => {
        if (value > mayor.value) {
            mayor = {
                title: key,
                value
            };
        }
    });
    return mayor;
};

export type GestorGastosActions =
    | { type: "AGREGAR_MOVIMIENTO", payload: Gastos }
    | { type: "ELIMINAR_MOVIMIENTO", payload: number }
    | { type: "CALCULAR_BALANCE" }
    | { type: "FILTRAR", payload: string }

export const GestorGastosReducer = (state: GestorGastosState, action: GestorGastosActions): GestorGastosState => {

    switch (action.type) {

        case "AGREGAR_MOVIMIENTO":
            let nuevosIngresos: number = 0, nuevosGastosTotales: number = 0
            if (action.payload.tipo === "ingreso") {
                nuevosIngresos = state.ingresosTotales + action.payload.cantidad
                return {
                    ...state,
                    ingresosTotales: nuevosIngresos,
                    gastos: [...state.gastos, action.payload],
                    balance: nuevosIngresos - nuevosGastosTotales
                }
            }
            nuevosGastosTotales = state.gastosTotales + action.payload.cantidad
            return {
                ...state,
                gastosTotales: nuevosGastosTotales,
                gastos: [...state.gastos, action.payload],
                balance: nuevosIngresos - nuevosGastosTotales,
                mayorGastoCategoria: obtenerMayorGastoCategoria([...state.gastos, action.payload])
            }


        case "ELIMINAR_MOVIMIENTO":
            let nuevosIngresos2: number = 0, nuevosGastosTotales2: number = 0
            const nuevosGastos: Gastos[] = state.gastos.filter((gasto) => {
                if (gasto.id !== action.payload) {
                    if (gasto.tipo == "gasto") {
                        nuevosGastosTotales2 += gasto.cantidad

                    } else {
                        nuevosIngresos2 += gasto.cantidad
                    }
                    return gasto
                }
            })
            return {
                ...state,
                ingresosTotales: nuevosIngresos2,
                gastosTotales: nuevosGastosTotales2,
                gastos: nuevosGastos,
                balance: nuevosIngresos2 - nuevosGastosTotales2,
                mayorGastoCategoria: obtenerMayorGastoCategoria(nuevosGastos)
            }
        default:
            return state
    }

}