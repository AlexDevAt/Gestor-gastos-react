import type { FC } from "react"

interface Props {
    placeholder: string,
    title: string,
    type: TiposInput
    onInput: (event: HTMLInputElement) => void
}

type TiposInput = "text" | "number"

export const InputText: FC<Props> = ({ placeholder, title, type, onInput }) => {

    return (
        <div>
            <h3 className='font-inter font-semibold '>{title}</h3>
            <input className='rounded-2xl flex border-2 mt-3 mb-20 h-10 pl-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                min={1}
                onChange={(e) => onInput(e.target)}
                type={type} placeholder={placeholder} size={placeholder.length < 10 ? 15 : placeholder.length} />
        </div>
    )
}
