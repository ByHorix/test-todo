import {Task} from "../../types"
import React, {ChangeEvent, useState} from "react"
import {Button, Card, CardBody, CardHeader, Input} from "reactstrap"
import {useAppDispatch} from "../../hooks/redux"
import {editTask, switchIsEditing} from "./store"

export const TaskCard = (task: Task): React.ReactElement => {
  const {
    isCompleted,
    isEditing,
    taskNumber,
    description,
    id
  } = task

  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState(description)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const handleEdit = (): void => {
    if (description !== inputValue) {
      dispatch(editTask({...task, description: inputValue}))
    }
  }

  const handleSwitchIsEditing = (newEditingValue: boolean): void => {
    dispatch(switchIsEditing({
      taskId: id,
      newEditingValue
    }))
  }

  const handleSwitchIsCompleted = (): void => {
    dispatch(editTask({...task, isCompleted: !isCompleted}))
  }

  return (
    <Card className={`opacity-${isCompleted ? "50" : "100"}`}>
      <CardHeader className="d-flex opa flex-wrap justify-content-between align-content-center">
        <h5 className='m-0'>
          {`Task # ${taskNumber}${isCompleted ? ' completed' : ''}`}
        </h5>
        <div>
          {
            isEditing
              ? <>
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
              </>
              : <>
                {
                  !isCompleted && <Button color='primary' onClick={(): void => handleSwitchIsEditing(true)}>
                        Edit
                  </Button>
                }
                <Button onClick={handleSwitchIsCompleted}>Mark as {isCompleted ? 'not completed' : 'completed'}</Button>
              </>
          }
        </div>
      </CardHeader>
      <CardBody>
        {
          isEditing
            ? <Input value={inputValue} onChange={handleChange}/>
            : description
        }
      </CardBody>
    </Card>
  )
}