import React from 'react';


export default ({name, gender}) => {
    console.log(name)
    return (

        <div>
            <div>{name}</div>
            <div>{gender}</div>

        </div>
    )

}
