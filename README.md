# react-modal

> Basic React Modal

[![NPM](https://img.shields.io/npm/v/react-modal.svg)](https://www.npmjs.com/package/react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal
```

## Usage

```jsx
import React, { useState } from 'react'
import Modal from 'react-modal'

const BasicExample = () => {

  const [showModal, setShowModal] = useState(false)
  const hideModal = () => showModal && setShowModal(false)

  return (
    <button onClick={() => setShowModal(true)}>
      Basic modal
    </button>

    <Modal show={showModal} onClickCloseBtn={hideModal} title='Basic modal'>
      <p>I am a basic modal</p>
    </Modal>
  )
}
```

## Advanced usage

```jsx
import React, { useState } from 'react'
import Modal from 'react-modal'

const CustomizeFooter = () => {
  return <p>My custom footer</p>
}

const CustomizeHeader = () => {
  return <p>My custom header</p>
}

const AdvancedExample = () => {

  const [showModal, setShowModal] = useState(false)
  const hideModal = () => showModal && setShowModal(false)

  return (
    <button onClick={() => setShowModal(true)}>
      Advanced modal
    </button>

    <Modal
      show={showModal}
      onClickCloseBtn={hideModal  }
      footer={<CustomizeFooter />}
      header={<CustomizeHeader />}
      backgroundColor='lightyellow'
      backdropBackgroundColor='rgba(255,165,0, 0.5)'
    >
      <p>I am an advanced modal</p>
    </Modal>
  )
}
```

## License

MIT © [melacod](https://github.com/melacod)
