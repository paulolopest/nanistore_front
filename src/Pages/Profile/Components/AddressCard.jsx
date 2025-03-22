import React from 'react'

const AddressCard = ({ name, address, cep }) => {
    return (
        <div className="flex w-[48%] flex-col gap-2 rounded-xl bg-neutral-100 px-4 py-2 text-sm text-neutral-400 max-540:w-full">
            <p className="text-base">Casa</p>

            <div>
                <p>{name}</p>
                <p>{address}</p>
                <p>{cep}</p>
            </div>

            <div className="flex w-full items-center justify-between pt-2 text-neutral-300">
                <p className="cursor-pointer hover:text-neutral-600 hover:underline">Editar</p>
                <p className="cursor-pointer hover:text-red-500 hover:underline">Remover</p>
            </div>
        </div>
    )
}

export default AddressCard
