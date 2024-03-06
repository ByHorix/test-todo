import React from "react"
import {Button, CardHeader, CardTitle} from "reactstrap"
import {useAppDispatch, useAppSelector} from "../../utilities/hooks/redux"
import {switchAddingNew} from "./store"
import "./styles.css"

export const Header = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const {isAddingNew} = useAppSelector((state) => state.layout)

  return (
    <CardHeader className='d-flex justify-content-between card-header align-items-baseline flex-wrap'>
      <CardTitle tag='h2'>"Operation: Get Stuff <span className='text-bg-success rounded-2 custom-badge'>Done</span>"</CardTitle>
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