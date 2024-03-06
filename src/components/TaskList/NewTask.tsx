import {Button, Card, CardBody, CardHeader, Form, Input} from "reactstrap"
import React, {ChangeEvent, useState} from "react"
import {useAppDispatch} from "../../utilities/hooks/redux"
import {addNewTask} from "./store"
import {switchAddingNew} from "../Layout/store"

export const NewTask = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    const newTask = {
      description: inputValue,
      isEditing: false,
      isCompleted: false,
      id: new Date().valueOf()
    }

    dispatch(addNewTask(newTask))
    dispatch(switchAddingNew())
  }

  return (
    <Card className="mb-2">
      <CardHeader className="d-flex opa flex-wrap justify-content-between align-items-center">
        <h5>
          What do you need to do?
        </h5>
        <div>
          <Button
            color='success'
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button onClick={(): void => {
            dispatch(switchAddingNew())
          }}>
            Cancel
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Input value={inputValue} placeholder='Type something...' onChange={handleChange}/>
        </Form>
      </CardBody>
    </Card>
  )
}
