import React from 'react'


export default function Image(props) {
    let alt= 'avatar'
  return (
    <img src={props.image} alt={alt} width= '200' className='pic'/>
  )
}
