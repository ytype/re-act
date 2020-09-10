import React from "react"
import gist from "../../../../assets/gist.png"
import "./style.scss"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { updateGist } from "../../../../util/gist/update"

const SaveButton = ({ content }: any) => {
  const onClickHandler = async () => {
    try {
      const res = await updateGist(
        localStorage["ghToken"],
        localStorage["gistId"],
        content
      )
      const status = res.status
      if (status === 200) {
        toast("😉 gist에 저장했습니다.")
      } else if (status === 401) {
        toast.error("😠 github token과 gistid를 재설정해주세요!")
      }
    } catch {
      toast.error("😠 github token과 gistid를 재설정해주세요!")
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
        <p>Save on Gist</p>
      </button>
    </div>
  )
}

export default SaveButton
