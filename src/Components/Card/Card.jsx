import React, { memo } from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
    const {id, Name,Price} = props;
  return (
    <div>
        <h2>{Name}</h2>
        <p>{Price}</p>
        <Link to={`/description/${id}`}>AJAO</Link>
    </div>
  )
}

export default memo(Card)