
import { PuzzleIcon } from "lucide-react"
import type { FC } from "react"

interface Props {
    title: string,
    value: number,
    categoria?: string
    bgColor: string,
    colorText: string
}

export const CardInfo: FC<Props> = ({ title, value, categoria, bgColor, colorText }) => {
    return (
        <div className='font- flex flex-row h-35 w-90 rounded-2xl border-gray-200 border-1 items-center '
            style={{ backgroundColor: bgColor }}>
            <div className="flex h-20 w-20 justify-center items-center p-2 ml-5 rounded-2xl "
                style={{ backgroundColor: `color-mix(in srgb ,${bgColor} 80%, ${colorText}` }}>
                <PuzzleIcon size={30} />
            </div>
            <div className="pl-5" style={{ color: colorText }}>
                <p className="text-left">{title}</p>

                {categoria !== "" && (
                    <p className="text-left font-medium text-2xl">{categoria}</p>
                )}

                <p className="text-2xl pt-1 font-semibold">${value}</p>
            </div>
        </div>
    )
}
