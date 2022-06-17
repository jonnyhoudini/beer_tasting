import React from 'react'

const Display = ({ selectedBeer }) => {

    const foodPairings = selectedBeer.food_pairing
    const list = foodPairings.map((note, index) => <li key={index}>{note}</li>)

    return (
        <div className="display">

            <div className="textblock">

                <h2>{selectedBeer.name}</h2>
                <p className="tagline">{selectedBeer.tagline}</p>
                <p>{selectedBeer.description}</p>
                <h3>Suggested food pairings</h3>
                <ul>
                    {list}
                </ul>

            </div>

            <img src={selectedBeer.image_url} height='300px'></img>
        </div >
    )
}

export default Display