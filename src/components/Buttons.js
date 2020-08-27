import React from 'react';
import ButtonCard from './ButtonCard';

export default (props) => {

    return(

        <div>
           
            {
                props.data && props.data.map((noun, index) => (
                   <ButtonCard 
                      key={index}
                      name={noun.name}
                      gender={noun.gender}
                    />
                ))
            }
        </div>
        
    )

}