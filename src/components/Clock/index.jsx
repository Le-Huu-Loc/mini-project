import React, { useEffect, useRef, useState } from 'react';
import './Clock.scss'


function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)

    return `${hours}:${minutes}:${seconds}`
}
function randomColor(currentColor) {
    const arrColor = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black']
    const currentIndex = arrColor.indexOf(currentColor)
    let newIndex = currentIndex
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 7)
    }
    return arrColor[newIndex]
}

function Clock() {
    const [timeString, setTimeString] = useState('')
    const [color, setColor] = useState('transparent')
    const colorRef = useRef('transparent')

    useEffect(() => {
        const timeInterVal = setInterval(() => {
            const now = new Date()
            const newTimeString = formatDate(now)
            setTimeString(newTimeString)
        }, 1000);

        return () => clearInterval(timeInterVal)
    }, [])

    useEffect(() => {
        const colorInterVal = setInterval(() => {
            const newColor = randomColor(colorRef.current)
            setColor(newColor)

            colorRef.current = newColor
        }, 500)

        return () => clearInterval(colorInterVal)
    }, [])

    return (
        <div className="clock" style={{ border: `4px solid ${color}` }}>{timeString}</div>
    );
}

export default Clock;