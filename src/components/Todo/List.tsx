import React, { useState } from "react"

interface Iitem {
  content: string
  done: boolean
}

const List = () => {
  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState<Iitem[] | undefined>(undefined)
  const addItem = () => {}
}

export default List
