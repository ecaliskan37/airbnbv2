import { Link, useParams } from 'react-router-dom'
import React from 'react';
const Detail = () => {
    const { id } = useParams()
    return (
        <div>Detail{id}</div >
    )
}

export default Detail