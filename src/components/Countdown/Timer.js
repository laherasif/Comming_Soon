import React, { useState, useEffect } from "react";
// import moment from 'moment';
import "./Timer.css";

const CountDown = () => {
  // const [time, setTime] = useState({
  //   days: 0,
  //   minutes: 0,
  //   hours: 0,
  //   secounds: 0,
  //   time_up: ""
  // });
  // const [deadlines, setDeadLines] = useState('');
  // const [X, setX] = useState('');


  // const count = () => {
  //   var now = new Date().getTime();
  //   var t = deadlines - now;
  //   var dd = Math.floor(t / (1000 * 60 * 60 * 24));
  //   var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  //   var ss = Math.floor((t % (1000 * 60)) / 1000);

  //   var days = dd < 10 ? "0" + dd : dd;
  //   var hours = hh < 10 ? "0" + hh : hh;
  //   var minutes = mm < 10 ? "0" + mm : mm;
  //   var seconds = ss < 10 ? "0" + ss : ss;

  //   setTime({ days, minutes, hours, seconds });

  //   if (t < 0) {
  //     clearInterval(X);
  //     setTime({
  //       days: 0,
  //       minutes: 0,
  //       hours: 0,
  //       seconds: 0,
  //       time_up: "TIME IS UP"
  //     });
  //   }
  // }
  // useEffect(() => {
  //   setDeadLines( new Date("Oct 08, 2022 21:00:00").getTime());
  //   // setDeadLines(deadline)
  //   let timeinterval = setInterval(count(), 1000);
  //   console.log("tim" , timeinterval)
  //   // setX(x)

  // }, [])


  
  const [dealTime, setDealTime] = useState({})


  // Zero function 
  const leadingZero = (num) => {
      return (num < 10 && num > 0) ? "0" + num : num;
  }

  // update Hook which using Timer 

  useEffect(() => {


      // Timer function 
      let updateClock = () => {
          let t = getTimeDifference('friday sept 30 2022');
          return t
      }
      //    Call timer function
      let t = updateClock();
      let timeinterval = setInterval(updateClock, 1000);

      if (t.time <= 0 || isNaN(t.time)) {
          // Clear Timer Function
          clearInterval(timeinterval);
      }
      // Start Timer Function

  }, [])

  // Check Time Diff
  const getTimeDifference = (eventDate) => {
      const time = Date.parse(eventDate) - Date.parse(new Date());
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);
      
      if (days && hours && minutes && seconds <= 0) {
        
          setDealTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })

      }
      else {
          setDealTime({ days, hours, minutes, seconds })
      }

      return { time, days, hours, minutes, seconds }

  }


  const { days, seconds, hours, minutes } = dealTime;
  return (
    <div id="countdown">
      <div className="col-4">
        <div className="box">
          <p id="day">{days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );

}

export default CountDown;
