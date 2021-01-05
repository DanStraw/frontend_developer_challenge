import React from 'react';


export default function Header(props) {

  return (
    <div>
      <h1 className="text-yellow-100 text-center md:text-4xl" >{props.data}</h1>
    </div>
  )
}