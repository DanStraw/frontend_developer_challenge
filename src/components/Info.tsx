import React from 'react';


export default function Info(props) {

  return (
    <div>
      <h1 className="text-white text-center">{props.message}</h1>
      <h1 className="text-white text-center" >{props.date}</h1>
      <h1 className="text-white text-center" >{props.location}</h1>
      <h1 className="text-white text-center" >{props.coords}</h1>
    </div>
  )
}