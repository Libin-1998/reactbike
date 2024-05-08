import React from 'react'
import "./Time.css"

export default function Time() {
  return (
    <>
  <div id="countdown">
    {/* <h2>Countdown Timer</h2> */}
    <div id="timer">
      <div>
        <span id="days">0</span>
        <span>Days</span>
      </div>
      <div>
        <span id="hours">0</span>
        <span>Hours</span>
      </div>
      <div>
        <span id="minutes">0</span>
        <span>Minutes</span>
      </div>
      <div>
        <span id="seconds">0</span>
        <span>Seconds</span>
      </div>
    </div>
  </div>

      
    </>
  )
}
