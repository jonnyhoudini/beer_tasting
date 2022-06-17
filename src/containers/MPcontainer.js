import { useState, useEffect } from 'react'
import Display from '../components/Display'
import Header from '../components/Header'
import Selector from '../components/Selector'
import './Container.css'

const MPcontainer = () => {

    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)

    useEffect(() => {
        getBeers()
    }, [])

    const getBeers = () => {
        fetch('https://api.punkapi.com/v2/beers?page=2&per_page=79')
            .then(res => res.json())
            .then(data => setBeers(data))
    }

    return (
        <>
            <div className="mainContainer">
                <Header />
                <Selector beers={beers} setSelectedBeer={setSelectedBeer} />
                {selectedBeer ? <Display selectedBeer={selectedBeer} /> : null}
            </div>

        </>
    )
}

export default MPcontainer