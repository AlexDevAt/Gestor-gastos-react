import React, { type FC } from 'react'
import { CardInfo } from './CardInfo'

export interface MayorGasto {
    title: string,
    value: number
}

interface Props {
    ingresoTotal: number,
    gastoTotal: number,
    balance: number,
    mayorGasto: MayorGasto
}

export const Estadisticas: FC<Props> = ({ ingresoTotal, gastoTotal, balance, mayorGasto }) => {
    return (
        <div className='ml-15 mb-15 mt-5 flex justify-between mr-15 lg:gap-8 '>
            <CardInfo
                title="Ingresos totales"
                value={ingresoTotal}
                categoria=""
                bgColor="#E8F8F0"
                colorText="#16A36A"
            />

            <CardInfo
                title="Gastos totales"
                value={gastoTotal}
                categoria=""
                bgColor="#FDECEC"
                colorText="#F04438"
            />

            <CardInfo
                title="Balance"
                value={balance}
                categoria=""
                bgColor="#E8F1FF"
                colorText="#3478F6"
            />

            <CardInfo
                title="Categoria con mas gastos"
                value={mayorGasto.value}
                categoria={mayorGasto.title}
                bgColor="#F1ECFF"
                colorText="#7C5CE6"
            />
        </div>
    )
}
