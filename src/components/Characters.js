import React from 'react'

const Characters = ({characters = []}) => {
    return (
        <div className='row'>
            {
            characters.map((item, index) => (
                <div className='col'></div>
                ))}
</div>
    )
}

export default Characters
