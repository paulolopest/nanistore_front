import React from 'react'
import { Link } from 'react-router-dom'

const ListLinks = ({ list, title }) => {
    const listMap = list.map((item) => (
        <Link
            className="cursor-pointer text-sm text-neutral-400 hover:text-white hover:underline"
            key={item.id}
        >
            {item.name}
        </Link>
    ))

    return (
        <ul className="flex flex-col gap-6">
            <h1 className="text-xl font-bold uppercase text-neutral-100">{title}</h1>
            <div className="flexCol gap-3">{listMap}</div>
        </ul>
    )
}

export default ListLinks
