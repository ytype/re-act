import React from "react"
import gist from "../../../../assets/gist.png"
import "../saveButton/style.scss"
import { getGist } from "../../../../util/gist/get"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Iitem } from "../../../../types/index"

type props = {
  items: Iitem[]
  setIndex(num: number): void
  setItems(items: Iitem[]): void
}
const FetchButton = ({ items, setIndex, setItems }: props) => {
  const onClickHandler = async () => {
    try {
      const res = JSON.parse(
        JSON.stringify(await getGist(localStorage["gistId"]))
      )
      setItems(res)
      let maxnum = 0
      res.forEach((item: Iitem) => {
        if (maxnum < item.id) {
          maxnum = item.id
        }
      })
      setIndex(maxnum + 1)
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
        <img src={gist} className="gist" alt="gist" />
        <p>fetch Data</p>
      </button>
    </div>
  )
}

export default FetchButton
