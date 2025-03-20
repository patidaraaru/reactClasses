import React from 'react'
import LoginProvider from './LoginProvider'
import CreateLoginConsumer from './CreateLoginConsumer'

const CreateLoginDataProvider = () => {
  return (
    <LoginProvider>
        <CreateLoginConsumer/>
    </LoginProvider>
  )
}

export default CreateLoginDataProvider
