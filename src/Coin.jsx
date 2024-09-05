import React, { useState } from 'react'

const Coin = () => {

    const headTail = ["https://www.riggedcoinflip.com/assets/395-3951330_thecoinspot-com-us-washington-head-quarter-dollar-coin.png", "https://www.riggedcoinflip.com/assets/146-1464848_quarter-tail-png-tails-on-a-coin.png"]
    const [flip, setFlip] = useState(headTail[0])
    const [count, setcount] = useState(0)
    const [headcount, setheadcount] = useState(0)
    const [tailcount, settailcount] = useState(0)
    const handleToggle = () => {
        const flips = Math.floor(Math.random() * 2)
        setFlip(headTail[flips])
        setcount(count + 1)
        if (headTail[flips] === headTail[0]) {
            setheadcount(headcount + 1)
        } else {
            settailcount(tailcount + 1)
        }
    }

    return (
        <>
            <h1>Lets flip a coin</h1>
            <img src={flip} alt="" width="200" />
            <button onClick={handleToggle}>Flip Me!</button>
            <p>Out of {count} flips , there have been {headcount} heads and {tailcount} tails</p>
        </>
    )
}

export default Coin
