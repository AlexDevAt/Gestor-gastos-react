import { TiposCategoria, type TiposCategoriaStrings } from '@/types/Categoria.types'
import { Filter } from 'lucide-react'
import { type FC } from 'react'

const categoriasActuales: string[] = ["Todas", ...Object.values(TiposCategoria).map((cat) => cat.title)]


interface Props {
    onClickFilter: (tipo: TiposCategoriaStrings) => void
}

export const BarraFiltrar: FC<Props> = ({ onClickFilter }) => {

    return (
        <div className='bg-white mt-5 flex ml-15 mr-15 rounded-3xl flex-row border border-gray-200 pt-3 pb-3'>
            <div className='p-3'>
                <Filter />
            </div>
            <div className='flex items-center'>
                <p className='pl-2'>Filtrar por categoria</p>
                <select onChange={(e) => onClickFilter(e.target.value)} className='rounded-3xl flex border-2 ml-6 h-10 w-50' name="" id="" >
                    {
                        categoriasActuales.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
