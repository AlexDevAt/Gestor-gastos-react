import type { Gastos } from '@/interfaces/Gastos.interface'
import { CustomTextBubble } from './CustomTextBubble'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { type FC } from 'react'
import { TipoGastos, type Tipo } from '@/types/tipos.type'


interface Props {
    movimientos: Gastos[]
    ondelete: (id: number) => void
}

export const Movimientos: FC<Props> = ({ movimientos, ondelete }) => {

    return (
        <div className='bg-white mt-5 flex ml-15 mr-15 rounded-3xl flex-col border border-gray-200'>
            <h2 className='font-inter m-5 font-semibold text-2xl'>Movimientos</h2>
            <table className=' w-90% m-5 '>
                <thead className='bg-blue-100'>
                    <tr className='text-left font-inter font-semibold'>
                        <td className='p-3'>
                            Concepto
                        </td>
                        <td className='p-3'>
                            Cantidad
                        </td>
                        <td className='p-3'>
                            Categoria
                        </td>
                        <td className='p-3'>
                            Tipo
                        </td>
                        <td className='p-3'>
                            Acciones
                        </td>
                    </tr>
                </thead>

                <tbody >
                    {
                        movimientos.map((m) => {
                            const tipo: Tipo = TipoGastos[m.tipo]
                            return (<tr key={m.id}>
                                <td className='p-3 '>{m.concepto}</td>
                                <td className='p-3 '>${m.cantidad}</td>
                                <td className=''>
                                    <CustomTextBubble title={m.categoria.title} bgColor={m.categoria.bgColor} textColor={m.categoria.textColor} />
                                </td>
                                <td className=''>
                                    <CustomTextBubble title={tipo.title} bgColor={tipo.bgColor} textColor={tipo.textColor} />
                                </td>
                                <td className='p-3'>
                                    <Button onClick={() => ondelete(m.id)} variant="outline" className="border-red-500 bg-red-200 cursor-pointer">
                                        <Trash size={40} color='red' />
                                    </Button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>

            </table>
        </div >

    )
}
