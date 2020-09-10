import React from "react"
import gist from "../../../../assets/gist.png"
import "../saveButton/style.scss"
import { getGist } from "../../../../util/gist/get"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Iitem } from "../../../../types/index"

type props = {
  items: Iitem[]
  setItems(items: Iitem[]): void
}
const FetchButton = ({ items, setItems }: props) => {
  const onClickHandler = async () => {
    try {
      console.log(items)
      const res = JSON.parse(
        JSON.stringify(await getGist(localStorage["gistId"]))
      )
      setItems(res)
      toast("😉 gist 데이터를 불러왔습니다!")
    } catch {
      toast.error("😠 데이터를 불러오지 못했습니다.")
    }
  }
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        draggable
      />
      <button onClick={onClickHandler} className="gist-btn">
        <img src={gist} className="gist" />
        <p>fetch Data</p>
      </button>
    </div>
  )
}

export default FetchButton
