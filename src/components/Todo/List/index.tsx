import React, { useState, useEffect } from "react"
import Item from "../Item"
import { Iitem } from "../../../types/index"
import Chart from "../Chart"
import { calcTime } from "../../../util/time"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import SaveButton from "../button/saveButton/index"
import FetchButton from "../button/fetchButton/index"
import { IsValid } from "../../../util/gist/token"

const List = ({ history }: any) => {
  useEffect(() => {
    if (!IsValid()) {
      history.push("/auth")
    }
  }, [history])

  const [items, setItems] = useState<Iitem[]>([])
  const [index, setIndex] = useState(0)
  const [inputText, setInputText] = useState("")
  const [timeArr, setTimeArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const addItem = () => {
    if (inputText) {
      const newItem = {
        id: index,
        content: inputText,
        done: false,
        time: null,
      }
      setIndex(index + 1)
      setItems(items.concat(newItem))
      setInputText("")
      toast(`😀 ${inputText}를 등록했습니다.`)
    } else {
      toast.error("😓 텍스트를 입력해주세요!")
    }
  }

  const removeItem = (id: number) => {
    const nextItem: Iitem[] = items.filter((item) => {
      toast(`😆 ${item.content}를 삭제했습니다.`)
      return item.id !== id
    })
    setItems(nextItem)
  }

  const doneItem = (id: number) => {
    const nextItems: Iitem[] = items.map((item) => {
      if (item.id === id) {
        if (item.done === false) {
          item.time = calcTime()
          toast(`🙂 ${item.content}를 완료했습니다.`)
        } else {
          item.time = null
          toast(`🙂 ${item.content}를 취소했습니다.`)
        }
        item.done = !item.done
      }
      return item
    })
    setItems(nextItems)
  }

  useEffect(() => {
    const prevArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    if (items.length === 0) {
      setTimeArr(prevArr)
    } else {
      const newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
      items.forEach((item) => {
        if (item.time !== null) {
          prevArr[item.time - 10] += 1
        }
      })
      newArr[0] = prevArr[0]
      for (let i = 1; i <= 8; i++) {
        newArr[i] = prevArr[i]
        newArr[i] += newArr[i - 1]
      }
      setTimeArr(newArr)
    }
  }, [items])

  const itemList: React.ReactElement[] = items.map((todo) => (
    <Item
      removeItem={removeItem}
      doneItem={doneItem}
      key={todo.id}
      id={todo.id}
      content={todo.content}
      done={todo.done}
      time={todo.time}
    />
  ))

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addItem()
  }

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        draggable
      />
      <Chart timeArr={timeArr} />
      <SaveButton content={items} />
      <FetchButton setIndex={setIndex} items={items} setItems={setItems} />
      {itemList}
      <form onSubmit={onFormSubmit}>
        <input value={inputText} onChange={onChangeText} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default List
