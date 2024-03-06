import React from "react"
import {FiltersEnum} from "../../../types/enums"
import {Col, Input, Row} from "reactstrap"
import {useAppDispatch, useAppSelector} from "../../../utilities/hooks/redux"
import {changeActiveFilter} from "../store"

export const Filter = (): React.ReactElement => {
  const {activeFilter} = useAppSelector(state => state.taskList)
  const dispatch = useAppDispatch()

  return (
    <Row className='align-items-baseline'>
      <Col className="col-lg-3">
        Filter:
      </Col>
      <Col className="col-lg-9">
        <Input type={"select"} value={activeFilter} onChange={(e): void => {
          dispatch(changeActiveFilter(e.currentTarget.value as FiltersEnum))
        }}>
          {
            (Object.keys(FiltersEnum) as Array<keyof typeof FiltersEnum>)
              .map((key) => <option key={key}>{FiltersEnum[key]}</option>)
          }
        </Input>
      </Col>
    </Row>
  )
}