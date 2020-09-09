import React from "react"
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"

type props = {
  removeItem(id: number): void
  doneItem(id: number): void
  id: number
  content: string
  done: boolean
}

const Item = ({ removeItem, doneItem, id, content, done }: props) => {
  const lineStyle = classNames({
    done: done === true,
  })

  return (
    <div>
      <div onClick={() => doneItem(id)} className="container">
        {done == false ? (
          <FontAwesomeIcon icon={faCircle} />
        ) : (
          <FontAwesomeIcon icon={faCheckCircle} />
        )}
        <p className={lineStyle}>{content}</p>
      </div>

      <FontAwesomeIcon
        className="trash"
        onClick={() => removeItem(id)}
        icon={faTrash}
      />
    </div>
  )
}

export default Item
