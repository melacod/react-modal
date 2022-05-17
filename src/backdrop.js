import React from 'react'

const backdropStyles = (backgroundColor) => {
  return {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: backgroundColor
  }
}

const Backdrop = ({ backgroundColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={backdropStyles(backgroundColor)}
      className='modal-backdrop'
    />
  )
}

export default Backdrop
