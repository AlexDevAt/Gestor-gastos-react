import { Wallet } from 'lucide-react'

export const Header = () => {
    return (
        <div className='h-20 w-full m-15 flex flex-colum gap-5'>
            <Wallet size={40} color='blue' />
            <div>
                <h1 className='font-semibold font-inter text-4xl'>Seguimientos de gastos</h1>
                <h3 className='mt-2 font-inter font-light text-gray-500'>Registra y controla tus ingresos y gastos de forma sencilla</h3>

            </div>
        </div>
    )
}
