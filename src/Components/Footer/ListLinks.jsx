import React from 'react'
import { Link } from 'react-router-dom'

const ListLinks = ({ list, title }) => {
    const listMap = list.map((item) => (
        <Link className="cursor-pointer hover:underline" key={item.id}>
            {item.name}
        </Link>
    ))

    return (
        <ul className="flex flex-col gap-3">
            <h1 className="text-xl font-bold uppercase underline">{title}</h1>
            {listMap}
        </ul>
    )
}

export default ListLinks
