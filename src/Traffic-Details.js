import React, { useState } from 'react'

const Show = ({ traffic }) => {
    
    const [maryland, setMaryland] = useState(false)

    return (
            <div class="row">
        { traffic.map(traff => (
            <div class="col s12 m6" key={traff.id}>
                { maryland ? <h3>{traff.maryland}</h3> : null }
            </div>

            
        ))}
                <div className="button">
                 <a class="waves-effect waves-light btn" onClick={()=> setMaryland(!maryland)}>Ikeja to Maryland</a>
                </div>
          </div>
    )
}

export default Show 
