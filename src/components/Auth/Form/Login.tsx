import React, { useState, useCallback } from "react"
import "./Login.scss"

const Login = () => {
  const [ghToken, setGhToken] = useState("")
  const [gistId, setGistId] = useState("")

  const onChangeGhToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGhToken(e.target.value)
  }

  const onChangeGistId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGistId(e.target.value)
  }

  const login = () => {
    console.log("login")
    localStorage.setItem("ghToken", ghToken)
    localStorage.setItem("gistId", gistId)
  }

  return (
    <div className="login-form">
      <div className="header">Todo with Gist</div>
      <div className="content">
        <div className="form">
          <h1 className="title">Github Token (gist 사용 가능)</h1>
          <input value={ghToken} onChange={onChangeGhToken} />
          <h1 className="title">Gist Id</h1>
          <input value={gistId} onChange={onChangeGistId} />
        </div>
        <button onClick={login} className="login-btn">
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login
