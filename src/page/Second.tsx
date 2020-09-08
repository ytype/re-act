import React, { useEffect } from "react"

const Second = ({ location }: any) => {
  useEffect(() => {
    console.log(location.state.login)
  }, [location])

  return <h1>Hello This is Second Page {location.state.login}</h1>
}

export default Second
