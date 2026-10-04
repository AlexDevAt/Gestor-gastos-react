import { Button } from '@/components/ui/button'
import { InputText } from './InputText'
import { SelectInput } from './SelectInput'
import type { Gastos } from '@/interfaces/Gastos.interface'
import type { FC } from 'react'
import { useAgregarMovimiento } from '@/hooks/useAgregarMovimiento'

interface Props {
    onSave: (data: Gastos) => void
}

export const AgregarMovimientos: FC<Props> = ({ onSave }) => {

    const {
        categoriasActuales,
        tiposActuales,
        handleInputCantidad,
        handleSelectInputCategoria,
        handleSelectInputTipo,
        handleGuardarGasto,
        handleInputConcepto
    } = useAgregarMovimiento()


    return (
        <div className='bg-white  flex ml-15 mr-15 rounded-3xl flex-col border border-gray-200'>
            <h2 className='font-inter m-5 font-semibold text-2xl'>Agregar movimiento</h2>
            <div className='ml-5 mt-2 flex justify-between mr-5 flex-row w-full'>
                <InputText type="text" title='Concepto' placeholder='Ej. Supermercado,salario, etc' onInput={handleInputConcepto} />
                <InputText type="number" title='Cantidad' placeholder='0.0' onInput={handleInputCantidad} />
                <SelectInput title='Categoria' options={categoriasActuales} onSelect={handleSelectInputCategoria} />
                <SelectInput title='Tipo' options={tiposActuales} onSelect={handleSelectInputTipo} />
                <div className='pt-6'>
                    <Button
                        onClick={() => {
                            const nuevoGasto = handleGuardarGasto()
                            if (nuevoGasto) onSave(nuevoGasto)
                        }}
                        className="text-white bg-blue-400 flex px-15 py-7 mr-15  " variant="outline" > + Agregar</Button>
                </div>

            </div>
        </div>
    )
}
