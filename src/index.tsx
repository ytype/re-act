import React from "react"
import ReactDOM from "react-dom"
import Router from "./router/index"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
)
