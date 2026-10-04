import { Header } from './components/Header'
import { AgregarMovimientos } from './components/AgregarMovimientos'
import type { Gastos } from './interfaces/Gastos.interface'
import { useReducer, useState } from 'react'
import { Movimientos } from './components/Movimientos'
import { Estadisticas, } from './components/Estadisticas'
import { GestorGastosReducer, getInitialState } from './hooks/GestorGastos.reducer'
import { BarraFiltrar } from './components/BarraFiltrar'
import type { TiposCategoriaStrings } from './types/Categoria.types'



export const GestorGastosApp = () => {

    const [filtro, setFiltro] = useState<TiposCategoriaStrings>("todas");

    const [state, dispatch] = useReducer(GestorGastosReducer, getInitialState())
    const { gastos,
        ingresosTotales,
        gastosTotales,
        balance,
        mayorGastoCategoria } = state

    const handleGuardarMovimiento = (data: Gastos) => {
        dispatch({
            type: "AGREGAR_MOVIMIENTO",
            payload: data
        })
    }
    const handleEliminarMovimiento = (id: number) => {
        dispatch({
            type: "ELIMINAR_MOVIMIENTO",
            payload: id
        })
    }

    const handleFiltro = (tipo: TiposCategoriaStrings) => {
        setFiltro(tipo);
    }
    const gastosFiltrados =
        filtro.toLowerCase() === "todas"
            ? gastos
            : gastos.filter(
                gasto => gasto.categoria.title === filtro
            );

    return (
        <div className='bg-[#F7F9FC] font-inter min-w-screen min-h-screen flex flex-col'>
            <Header />
            <AgregarMovimientos onSave={handleGuardarMovimiento} />
            <Estadisticas ingresoTotal={ingresosTotales} balance={balance} gastoTotal={gastosTotales} mayorGasto={{ title: mayorGastoCategoria?.title ?? "Sin definir", value: mayorGastoCategoria?.value ?? 0 }} />
            <BarraFiltrar onClickFilter={handleFiltro} />
            <Movimientos movimientos={gastosFiltrados} ondelete={handleEliminarMovimiento} />
        </div>
    )
}
