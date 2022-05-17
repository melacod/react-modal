import React, { Fragment } from 'react'
import Backdrop from './backdrop'
import ModalCloseButton from './close'

const wrapperStyles = {
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}

const modalStyles = (backgroundColor) => {
  return {
    maxWidth: '500px',
    border: '1px solid #ddd',
    backgroundColor: backgroundColor,
    margin: '100px auto 0',
    zIndex: 1,
    position: 'relative',
    padding: '10px',
    borderRadius: '20px',
    boxShadow: '10px 10px 10px black'
  }
}

const modalHeaderStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingBottom: '10px',
  borderBottom: '2px solid darkgrey'
}

const modalTitleStyles = {
  width: '90%',
  fontSize: '1.5rem',
  fontWeight: 'bold'
}

const modalFooterStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'right',
  width: '100%',
  paddingTop: '10px',
  borderTop: '2px solid darkgrey'
}

const Modal = ({
  children,
  header,
  title,
  footer,
  backgroundColor = 'white',
  backdropBackgroundColor = 'rgba(0, 0, 0, 0.472)',
  show,
  onClickCloseBtn
}) => {
  return (
    <Fragment>
      {show && (
        <div style={wrapperStyles} className='modal-wrapper'>
          <Backdrop backgroundColor={backdropBackgroundColor} />
          <div style={modalStyles(backgroundColor)} className='modal'>
            <div style={modalHeaderStyles} className='modal-header'>
              {header ? (
                <div>{header}</div>
              ) : title ? (
                <div style={modalTitleStyles} className='modal-title'>
                  {title}
                </div>
              ) : (
                <div> </div>
              )}

              <ModalCloseButton onClick={onClickCloseBtn} />
            </div>
            <div className='modal-content'>{children}</div>
            {footer && (
              <div className='modal-footer' style={modalFooterStyles}>
                {footer}
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Modal
