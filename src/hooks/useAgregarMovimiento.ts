import { useInputText } from './useInputText'
import { useSelectInput } from './useSelectInput'
import { TiposCategoria } from '@/types/Categoria.types'
import { TipoGastos } from '@/types/tipos.type'
import type { Gastos } from '@/interfaces/Gastos.interface'

export const useAgregarMovimiento = () => {

    const categoriasActuales = Object.values(TiposCategoria).map((cat) => cat.title)

    const tiposActuales: string[] = Object.values(TipoGastos).map((tipo) => tipo.title)

    const { inputText: inputConcepto, handleInput: handleInputConcepto } = useInputText()
    const { inputText: cantidad, handleInput: handleInputCantidad } = useInputText()
    const { selectInput: selectCategoria, handleSelectInput: handleSelectInputCategoria } = useSelectInput()
    const { selectInput: selectTipo, handleSelectInput: handleSelectInputTipo } = useSelectInput()

    const handleGuardarGasto = () => {

        const categoriaSeleccionada = Object.values(TiposCategoria).find(
            (categoria) => categoria.title === selectCategoria
        );


        if (!categoriaSeleccionada || !selectTipo) return
        const nuevoGasto: Gastos = {
            id: Date.now(),
            cantidad: Number(cantidad),
            categoria: {
                title: categoriaSeleccionada.title,
                bgColor: categoriaSeleccionada.bgColor,
                textColor: categoriaSeleccionada.textColor
            },
            concepto: inputConcepto,
            tipo: selectTipo == "Ingreso" ? "ingreso" : "gasto",
            fecha: Date.now().toLocaleString()
        }
        return nuevoGasto
    }
    return {
        categoriasActuales,
        tiposActuales,
        handleGuardarGasto,
        handleInputConcepto,
        handleInputCantidad,
        handleSelectInputCategoria,
        handleSelectInputTipo
    }
}
