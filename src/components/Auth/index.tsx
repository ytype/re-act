import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./style.scss"
import { IsValid } from "../../gist/auth"

const Login = ({ history }: any) => {
  const [ghToken, setGhToken] = useState("")
  const [gistId, setGistId] = useState("")

  useEffect(() => {
    console.log(IsValid())
    if (IsValid()) {
      history.push("")
    }
  }, [history])

  const onChangeGhToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGhToken(e.target.value)
  }

  const onChangeGistId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGistId(e.target.value)
  }

  const login = () => {
    if (!ghToken || !gistId) {
      toast.error("😓 토큰과 gist아이디를 입력해주세요!")
      return
    }
    localStorage.setItem("ghToken", ghToken)
    localStorage.setItem("gistId", gistId)
    toast("😀 토큰과 gist 아이디를 저장했습니다!")
  }

  return (
    <div className="login-form">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        draggable
      />
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
