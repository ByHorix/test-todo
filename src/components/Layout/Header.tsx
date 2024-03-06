import React from "react"
import {Button, CardHeader, CardTitle} from "reactstrap"
import {useAppDispatch, useAppSelector} from "../../utilities/hooks/redux"
import {switchAddingNew} from "./store"

export const Header = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const {isAddingNew} = useAppSelector((state) => state.layout)

  return (
    <CardHeader className='d-flex justify-content-between'>
      <CardTitle tag='h2'>"Operation: Get Stuff <span className='text-bg-success p-1 rounded-2'>Done</span>"</CardTitle>
      <Button
        color='primary'
        outline={true}
        onClick={(): void => {
          dispatch(switchAddingNew())
        }}
        disabled={isAddingNew}
      >
        + Add new task
      </Button>
    </CardHeader>
  )
}