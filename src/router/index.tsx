import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Index from "../page/Index"
import Second from "../page/Second"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/second" component={Second} />
      </Switch>
    </BrowserRouter>
  )
}

// <Route component={NotFound} /> for 404

export default Router
