import React, { useState, useEffect, useCallback } from "react"
import Item from "../Item"
import { Iitem } from "../../../types/index"
import Chart from "../Chart"
import { calcTime } from "../../../util/time"

const List = () => {
  const [items, setItems] = useState<Iitem[]>([])
  const [index, setIndex] = useState(0)
  const [inputText, setInputText] = useState("")
  const [timeArr, setTimeArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newItem = {
      id: index,
      content: inputText,
      done: false,
      time: null,
    }
    setIndex(index + 1)
    setItems(items.concat(newItem))
    setInputText("")
  }

  const removeItem = (id: number) => {
    const nextItem: Iitem[] = items.filter((item) => {
      return item.id !== id
    })
    setItems(nextItem)
  }

  const doneItem = (id: number) => {
    const nextItems: Iitem[] = items.map((item) => {
      if (item.id === id) {
        if (item.done === false) {
          item.time = calcTime()
        } else {
          item.time = null
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

  return (
    <div>
      <p onClick={() => console.log(items)}>{timeArr}</p>
      <Chart timeArr={timeArr} />
      <input value={inputText} onChange={onChangeText} />
      {itemList}
      {inputText}
      <button type="submit" onClick={addItem}>
        submit
      </button>
    </div>
  )
}

export default List
