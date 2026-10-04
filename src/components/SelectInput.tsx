import { type FC } from 'react'

interface Props {
    title: string,
    options: string[]
    onSelect: (value: HTMLSelectElement) => void
}

export const SelectInput: FC<Props> = ({ title, options, onSelect }) => {
    return (
        <div>
            <h3 className='font-inter font-semibold '>{title}</h3>
            <select onChange={(e) => onSelect(e.target)} className='rounded-3xl flex border-2 mt-3 mb-20 h-10 w-50' name="" id="" >
                {
                    options.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))
                }
            </select>
        </div>
    )
}
