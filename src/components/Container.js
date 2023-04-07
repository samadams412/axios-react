import React from 'react'

const Container = (props) => {
  return (
    <div className={`mt-5 container${props.fluid ? '-fluid' : ''}`}>
        {props.children}
    </div>
  )
}

export default Container