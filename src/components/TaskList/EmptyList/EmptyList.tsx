import React from "react"
import {Badge, Toast, ToastBody, ToastHeader} from "reactstrap"
import './styles.css'

export const EmptyList = (): React.ReactElement => {
  return (
    <Toast className='m-auto empty-list-card'>
      <ToastHeader>
        No Tasks Yet
      </ToastHeader>
      <ToastBody>
        <p>You can <Badge color='primary' className='p-2 rounded-2'>+ Add New Task</Badge> and then type something, like:</p>
        <p className='example-text border-opacity-75'>Interview with Yehor Baryshnykov<span>|</span></p>
      </ToastBody>
    </Toast>
  )
}