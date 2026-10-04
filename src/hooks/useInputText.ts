import { useState } from 'react'

export const useInputText = () => {
    const [inputText, setInputText] = useState("")

    const handleInput = (event: HTMLInputElement) => {
        if (event.value === "") return
        setInputText(event.value.trim())
    }


    return {
        inputText,
        handleInput

    }
}
