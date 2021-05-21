import React from "react";

export default function Clock(props) {
  const min = parseInt(props.time_diff / 60);
  const sec = props.time_diff - min * 60;
  let minstr = "0" + min.toString();
  var secstr;
  if (sec < 10) {
    secstr = "0" + sec.toString();
  } else {
    secstr = sec.toString();
  }

  const showtime = minstr + " : " + secstr;

  return (
    <div>
      <text> {showtime} </text>
    </div>
  );
}
