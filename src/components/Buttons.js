import React from 'react';
import ButtonCard from './ButtonCard';

export default (props) => {

    return(

        <div>
            <main>
                <div className="container">

                    <section className='section'>
                        <p className="front">Beispiel</p>
                        <button className="buttonDer">der</button>
                        <button className="buttonDie">die</button>
                        <button className="buttonDas">das</button>
                    </section>

                    <div className="deckButtons">
                        <button className="previous" onClick={null}>Previous Card</button>
                        <button className="next" onClick={null}>Next Card</button>
                    </div>

                </div>

            </main><br /><br /> <br />
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