import React from "react"
import {CardHeader, Col, Row} from "reactstrap"
import {useAppSelector} from "../../../utilities/hooks/redux"
import {Filter} from "./Filter"

export const ActionsBlock = (): React.ReactElement => {
  const {tasksCount} = useAppSelector((state) => state.layout)

  return (
    <CardHeader>
      <Row className='align-items-baseline'>
        <Col className='col-6 col-lg-8'>
          {`Tasks count - ${tasksCount}`}
        </Col>
        <Col className='col-6 col-lg-4'>
          <Filter/>
        </Col>
      </Row>
    </CardHeader>
  )
}