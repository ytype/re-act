import React, { useState, useEffect, useCallback } from "react"
import Item from "../Item"
import { Iitem } from "../../../types/index"
import Chart from "../Chart"
const List = () => {
  const [items, setItems] = useState<Iitem[]>([])
  const [index, setIndex] = useState(0)
  const [inputText, setInputText] = useState("")

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newItem = {
      id: index,
      content: inputText,
      done: false,
      time: "",
    }
    setIndex(index + 1)
    setItems(items.concat(newItem))
    setInputText("")
  }

  const removeItem = (id: number) => {
    console.log("removeItem")
    console.log(id)
    const nextItem: Iitem[] = items.filter((item) => {
      return item.id !== id
    })
    setItems(nextItem)
  }

  const doneItem = (id: number) => {
    const nextItems: Iitem[] = items.map((item) => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })
    setItems(nextItems)
  }

  const itemList: React.ReactElement[] = items.map((todo) => (
    <Item
      removeItem={removeItem}
      doneItem={doneItem}
      key={todo.id}
      id={todo.id}
      content={todo.content}
      done={todo.done}
    />
  ))

  return (
    <div>
      <Chart />
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
