import React from 'react';
import './title.css'

const Title = () => {
  return (
    <div className='title-container'>
      <h2>For the first part of the interview we've got two TODOs:</h2>
      <p className='subtitle' >In this session, we want write two new functions inside src/services/Availabilty.js and validate the new functionality in some jest tests as we go.</p>
      <p></p>
      <ol>
        <li>
          <p className='todo_paragraph'>go to <span className="code">src/services/Availability.js</span> and write a function that returns an array with every possible time for booking a reservation at our restaurant (there's some notes in the spec file how to represent time in the restaurant domain).</p>
          <p className='todo_paragraph'>So for example, if we allow reservations to be booked at an interval of every fifteen minutes, and we open at 10:00am, we'd want an array containing something that represents the times 10:00am, 10:15am, 10:30am, 10:45am, 11:00am.... etc.</p>
        </li>
        <li>
          <p className='todo_paragraph'>In that same file, write a function that calculates how many tables are available during each timeslot given X reservations on the books.</p>
          <p className='todo_paragraph'>We provided some dummy data in the spec file for three reservations.</p>
          <p className='todo_paragraph'>Our data contract says we need the return value to be an array of objects, containing the <span className='code'>time</span>, and <span className='code'>numberOfTablesAvailable</span>.</p>
        </li>
      </ol>
    </div>
  )
}
 export default Title;