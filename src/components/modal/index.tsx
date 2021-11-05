import { Modal, ModalProps } from 'antd'
import React, { FC, ReactNode } from 'react'

interface IProps extends ModalProps {
  component: ReactNode
}

export const ModalUI:FC<IProps> = ({ component, ...props }) => {
  return (
    <Modal
      {...props}
      className='custom-modal'
      destroyOnClose
    >
      {component}
    </Modal>
  )
}
