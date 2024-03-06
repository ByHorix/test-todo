import {Button, Card, CardBody, CardHeader, Form, FormFeedback, FormGroup, Input} from "reactstrap"
import React, {ChangeEvent, useState} from "react"
import {useAppDispatch} from "../../utilities/hooks/redux"
import {addNewTask} from "./store"
import {switchAddingNew} from "../Layout/store"
import {validateTask} from "../../utilities/Utills"
import "./styles.css"

export const NewTask = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)

    if (!isValid) {
      setIsValid(true)
    }
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    if (validateTask(inputValue)) {
      const newTask = {
        description: inputValue,
        isEditing: false,
        isCompleted: false,
        id: new Date().valueOf()
      }

      dispatch(addNewTask(newTask))
      dispatch(switchAddingNew())
    } else {
      setIsValid(false)
    }
  }

  return (
    <Card className="mb-2">
      <CardHeader className="d-flex opa flex-wrap justify-content-between align-items-center card-header">
        <h5>
          What do you need to do?
        </h5>
        <div className="task-card__buttons">
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
          <FormGroup className='position-relative w-100'>
            <Input value={inputValue} placeholder='Type something...' onChange={handleChange} invalid={!isValid}/>
            <FormFeedback tooltip>Length must be less than or equal to 60 characters. Not empty!</FormFeedback>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
