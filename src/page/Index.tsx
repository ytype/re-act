import React, { Fragment } from "react"
import List from "../components/Todo/List"

const Index = ({ history }: any) => {
  return (
    <Fragment>
      <List history={history} />
    </Fragment>
  )
}

export default Index
