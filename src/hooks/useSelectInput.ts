import { useState } from 'react'

export const useSelectInput = () => {

    const [selectInput, setSelectInput] = useState("")

    const handleSelectInput = (value: HTMLSelectElement) => {
        if (value.value.trim() === "") return;

        setSelectInput(value.value.trim())
    }

    return {
        selectInput,
        handleSelectInput
    }
}
