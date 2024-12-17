import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'

const Sorter = ({ title, list }) => {
    const [minimize, setMinimize] = useState(true)

    const listMap = list.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
            <input type="checkbox" id={item} />
            <label className="text-neutral-500" htmlFor={item}>
                {item}
            </label>
        </div>
    ))

    return (
        <div className="flex w-full flex-col gap-4 rounded-md bg-white p-4 shadow-default">
            <div
                onClick={() => setMinimize(!minimize)}
                className="flex w-full cursor-pointer items-center justify-between"
            >
                <h3 className="text-lg font-semibold text-neutral-700">{title}</h3>
                <Icon.CaretDown weight="bold" />
            </div>

            {minimize && (
                <>
                    {listMap}

                    <button className="w-full rounded-md bg-neutral-800 py-2 text-sm text-white transition ease-linear hover:bg-neutral-700">
                        Aplicar
                    </button>
                </>
            )}
        </div>
    )
}

export default Sorter
