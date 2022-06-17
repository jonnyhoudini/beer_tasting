import React from 'react'

const Selector = ({ beers, setSelectedBeer }) => {

    const handleChange = (event) => {
        const beerIndex = event.target.value;
        setSelectedBeer(beers[beerIndex])
    }

    const options = beers.map((beer, index) => {
        return (
            <option key={index} value={index}>{beer.name}</option>
        )
    })

    return (
        <>
            <select onChange={handleChange}>
                <option value="">Choose a beer</option>
                {options}
            </select>
        </>
    )
}

export default Selector