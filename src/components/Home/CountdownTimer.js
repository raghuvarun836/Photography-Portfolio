import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const currentDay = now.getDay();

    // Set the target day to Saturday by default
    let targetDay = 6; // Saturday

    // If today is Saturday and the current time is past 11:59pm, set the target day to Sunday
    if (currentDay === 6 && now.getHours() >= 23 && now.getMinutes() >= 59) {
      targetDay = 0; // Sunday
    }

    const offerStartDate = new Date(now);
    offerStartDate.setDate(now.getDate() + (targetDay - currentDay));
    offerStartDate.setHours(0, 0, 0, 0);

    const offerEndDate = new Date(offerStartDate);
    offerEndDate.setDate(offerStartDate.getDate() + 1);
    offerEndDate.setHours(23, 59, 59, 999);

    const difference = offerEndDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return {
      timeLeft,
      offerExpired: difference <= 0,
    };
  };

  const [timerData, setTimerData] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimerData(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="countdown-timer">
      {timerData.offerExpired ? (
        <p>Offer expired! Another offer awaits. Stay tuned!</p>
      ) : (
        <>
          <p>Hurry! Contact us before the Offer ends in:</p>
          <div className="timer-values">
            <span>{timerData.timeLeft.days}</span>
            <span>:</span>
            <span>{timerData.timeLeft.hours}</span>
            <span>:</span>
            <span>{timerData.timeLeft.minutes}</span>
            <span>:</span>
            <span>{timerData.timeLeft.seconds}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
