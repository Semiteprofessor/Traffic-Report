import React, { useState } from 'react'

const Delete = ({ traffic }) => {
    
    const [maryland, setMaryland] = useState(false)

    const trafficDelete = (id) => {
        const deleteTraffic = traffic.filter(traffs => traffs.id !== id)
        setMaryland(deleteTraffic)
    }

   
    return (
            <div class="row">
        { traffic.map(traff => (
            <div class="col s12 m6" key={traff.id}>
                { maryland ? <h3>{traff.maryland}</h3> : null }
            </div>

            
        ))}
                
                <button className="create" onClick={trafficDelete}><i className="material-icons">delete</i></button>
          </div>
    )
}

export default Delete 
