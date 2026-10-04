import { type FC } from 'react'

interface Props {
    title: string,
    bgColor: string,
    textColor: string
}


export const CustomTextBubble: FC<Props> = ({ title = "ejemplo", bgColor = "#E8F8F0", textColor }) => {
    return (
        <div
            className={`h-10 w-fit text-center p-2 pl-5 pr-5  rounded-2xl`}
            style={{ backgroundColor: bgColor }}
        >
            <p
                className='font'
                style={{ color: `color-mix(in srgb ,${bgColor} 10%, ${textColor}` }} >{title}</p>
        </div>
    )
}
