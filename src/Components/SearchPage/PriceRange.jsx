import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'

const PriceRange = () => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(200)
    const [minimize, setMinimize] = useState(true)

    const handleMinChange = (e) => {
        const value = Number(e.target.value)
        if (value <= maxValue) setMinValue(value)
    }

    const handleMaxChange = (e) => {
        const value = Number(e.target.value)
        if (value >= minValue) setMaxValue(value)
    }

    return (
        <div className="flex w-full max-w-md flex-col gap-4 rounded-md bg-white p-4 shadow-default ">
            <div
                onClick={() => setMinimize(!minimize)}
                className="flex w-full cursor-pointer items-center justify-between"
            >
                <h3 className="text-lg font-semibold text-neutral-800">Preço</h3>
                <Icon.CaretDown weight="bold" />
            </div>

            {minimize && (
                <>
                    <p className="text-sm text-neutral-600">Intervalo de Preço</p>

                    <div className="relative flex h-4 items-center justify-center">
                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={minValue}
                            onChange={handleMinChange}
                            className="pointer-events-auto absolute h-1 w-full cursor-pointer appearance-none bg-neutral-300 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500"
                        />
                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={maxValue}
                            onChange={handleMaxChange}
                            className="pointer-events-auto absolute h-1 w-full cursor-pointer appearance-none bg-neutral-300 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="relative flex w-20 flex-col items-center rounded-md border-1 border-solid border-neutral-400">
                            <label className="absolute -top-2.5 bg-white p-0.5 text-xs text-neutral-800">
                                Mínimo
                            </label>

                            <input
                                placeholder={`R$ ${minValue.toLocaleString('pt-BR')}`}
                                className="w-24 rounded border border-neutral-300 p-2 text-center text-neutral-700"
                            />
                        </div>

                        <span className="font-semibold text-neutral-700">-</span>

                        <div className="relative flex w-20 flex-col items-center rounded-md border-1 border-solid border-neutral-400">
                            <label className="absolute -top-2.5 bg-white p-0.5 text-xs text-neutral-800">
                                Máximo
                            </label>

                            <input
                                placeholder={`R$ ${maxValue.toLocaleString('pt-BR')}`}
                                className="w-24 rounded border border-neutral-300 p-2 text-center text-neutral-700"
                            />
                        </div>
                    </div>

                    <button className="w-full rounded-md bg-neutral-800 py-2 text-white transition ease-linear hover:bg-neutral-700">
                        Aplicar
                    </button>
                </>
            )}
        </div>
    )
}

export default PriceRange
