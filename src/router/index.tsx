import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Auth from "../page/Auth"
import Index from "../page/Index"
import Todo from "../page/Index"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  )
}

// <Route component={NotFound} /> for 404
// rsi ReactSnippets

export default Router
