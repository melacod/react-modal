import React, { useState } from 'react'
import Modal from 'react-modal'

const CustomizeFooter = () => {
  return <p>My custom footer</p>
}

const CustomizeHeader = () => {
  return <p>My custom header</p>
}

const App = () => {
  const [showModal1, setShowModal1] = useState(false)
  const hideModal1 = () => showModal1 && setShowModal1(false)

  const [showModal2, setShowModal2] = useState(false)
  const hideModal2 = () => showModal2 && setShowModal2(false)

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const buttonStyles = {
    width: '200px',
    display: 'block',
    margin: '0 auto',
    padding: '10px',
    background: 'none',
    border: 'none',
    backgroundColor: '#eee',
    fontSize: '20px',
    cursor: 'pointer'
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>react-modal</h1>
      <div style={containerStyles}>
        <button style={buttonStyles} onClick={() => setShowModal1(true)}>
          Basic modal
        </button>
        <button style={buttonStyles} onClick={() => setShowModal2(true)}>
          Advanced modal
        </button>
      </div>

      <Modal show={showModal1} onClickCloseBtn={hideModal1} title='Basic modal'>
        <p>I am a basic modal</p>
      </Modal>

      <Modal
        show={showModal2}
        onClickCloseBtn={hideModal2}
        footer={<CustomizeFooter />}
        header={<CustomizeHeader />}
        backgroundColor='lightyellow'
        backdropBackgroundColor='rgba(255,165,0, 0.5)'
      >
        <p>I am an advanced modal</p>
      </Modal>
    </div>
  )
}

export default App
