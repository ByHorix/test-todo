import React from "react"
import {Badge, Button, CardHeader, CardTitle} from "reactstrap"

export const Header = (): React.ReactElement => {
  return (
    <CardHeader className='d-flex justify-content-between'>
      <CardTitle tag='h2'>"Operation: Get Stuff <span className='text-bg-success p-1 rounded-2'>Done</span>"</CardTitle>
      <Button>Add new task</Button>
    </CardHeader>
  )
}