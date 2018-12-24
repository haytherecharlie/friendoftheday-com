/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Countdown | Component
 ******************************************/

import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import './styles/Countdown.scss'

function Countdown({ endTime }) {
  const [timeLeft, setTimeLeft] = useState(endTime)

  useEffect(() => {
    setTimeLeft(format(timeLeft - new Date().getTime(), 'hh:mm:ss'))
    const interval = setInterval(() => {
      const now = new Date().getTime()
      setTimeLeft(format(timeLeft - now, 'hh:mm:ss'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return <div className="countdown">Expires: {timeLeft}</div>
}

export default Countdown
