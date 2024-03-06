import {Task} from "../../types"
import React, {ChangeEvent, useState} from "react"
import {Button, Card, CardBody, Col, Form, Input, Row} from "reactstrap"
import {useAppDispatch} from "../../utilities/hooks/redux"
import {deleteTask, editTask, switchIsEditing} from "./store"
import "./styles.css"

export const TaskCard = (task: Task): React.ReactElement => {
  const {
    isCompleted,
    isEditing,
    description,
    id
  } = task

  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState(description)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const handleEdit = (e: any): void => {
    e.preventDefault()

    if (description !== inputValue) {
      dispatch(editTask({...task, description: inputValue}))
    }
  }

  const handleSwitchIsEditing = (newEditingValue: boolean): void => {
    dispatch(switchIsEditing({
      taskId: id,
      newEditingValue
    }))

    setInputValue(description)
  }

  const handleSwitchIsCompleted = (): void => {
    dispatch(editTask({...task, isCompleted: !isCompleted}))
  }

  return (
    <Card className={`opacity-${isCompleted ? "50" : "100"} mb-2`}>
      {/*<CardBody className='d-flex flex-wrap justify-content-between task-card align-items-baseline'>*/}
      <CardBody className='task-card'>
        <Row className='align-items-baseline'>
          <Col className={`col-md-${isEditing || isCompleted ? '12' : '10'}`}>
            {
              isEditing
                ? <Form className='w-100 d-flex justify-content-between align-items-baseline' onSubmit={handleEdit}>
                  <Input value={inputValue} onChange={handleChange}/>
                  <div className='task-card__buttons'>
                    <Button
                      color='success'
                      onClick={handleEdit}
                      disabled={description === inputValue}
                    >
                      Save
                    </Button>
                    <Button onClick={(): void => handleSwitchIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </Form>
                : <div
                  className={`m-0 task-card__text ${isCompleted && ' text-decoration-line-through'}`}
                  onClick={handleSwitchIsCompleted}
                >
                  {description}
                </div>
            }
          </Col>
          {
            !isCompleted && !isEditing &&
              <Col className='col-md-2'>
                <div className='task-card__buttons'>
                  <Button color='primary' onClick={(): void => handleSwitchIsEditing(true)}>
                      Edit
                  </Button>
                  <Button
                    color="danger"
                    onClick={(): void => {
                      dispatch(deleteTask(id))
                    }}
                  >
                      Delete
                  </Button>
                </div>
              </Col>
          }
        </Row>
      </CardBody>
    </Card>
  )
}
