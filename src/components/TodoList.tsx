import React from "react"
import TodoItem from "./TodoItem"
import axios from "axios"

interface Props {}

interface TodoItemState {
  id: number
  text: string
  done: boolean
}

interface State {
  input: string
  content: string
  todoItems: TodoItemState[]
}

class TodoList extends React.Component<Props, State> {
  nextTodoId: number = 0

  state: State = {
    input: "",
    content: "",
    todoItems: [],
  }

  getRawUrl = async (gistId: string) => {
    const url = "https://api.github.com/gists"
    let raw_url = ""
    await axios.get(`${url}/${gistId}`).then((response) => {
      const files: any = response.data.files
      const fileName: string = Object.keys(files)[0]
      raw_url = files[fileName].raw_url
    })
    return raw_url
  }

  getGist = async () => {
    const gistId = "8759142b800011e43fd7c9a9d2c78682"
    const raw_url = await this.getRawUrl(gistId)
    let data = ""
    await axios.get(raw_url).then((response) => {
      data = response.data
    })
    return data
  }

  updateGist = async () => {
    const url = "https://api.github.com"
    const gistId = "8759142b800011e43fd7c9a9d2c78682"
    const token: string = "efe4ab9dd87fc2264149539b06129be064661bfa"

    const data = JSON.stringify({
      description: "Hello World Examples",
      files: {
        "hello_world_ruby.txt": {
          content:
            "Run `ruby hello_world.rb` or `python hello_world.py` to print Hello World",
          filename: "hello_world.md",
        },
        "hello_world_python.txt": null,
        "new_file.txt": {
          content: "This is a new placeholder file.",
        },
      },
    })

    /*
    const star = await axios.put(`${url}/gists/${gistId}/star`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    console.log(star)
*/

    const res = await axios.patch(`${url}/gists/${gistId}`, data, {
      headers: {
        Authorization: `token ${token}`,
      },
      data: data,
    })
    console.log(res)
  }

  onToggle = (id: number): void => {
    const { todoItems } = this.state
    const nextTodoItems: TodoItemState[] = todoItems.map((item) => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })

    this.setState({
      todoItems: nextTodoItems,
    })
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const { todoItems, input } = this.state
    const newItem: TodoItemState = {
      id: this.nextTodoId++,
      text: input,
      done: false,
    }
    const nextTodoItems: TodoItemState[] = todoItems.concat(newItem)
    this.setState({
      input: "",
      todoItems: nextTodoItems,
    })
  }

  onRemove = (id: number): void => {
    const { todoItems } = this.state
    const nextTodoItems: TodoItemState[] = todoItems.filter(
      (item) => item.id !== id
    )
    this.setState({
      todoItems: nextTodoItems,
    })
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget
    this.setState({
      input: value,
    })
  }

  async componentDidMount() {
    const _content = await this.getGist()
    this.setState({
      content: _content,
    })
    await this.updateGist()
  }

  render() {
    const { onSubmit, onChange, onToggle, onRemove } = this
    const { input, todoItems, content } = this.state
    const todoItemList: React.ReactElement[] = todoItems.map((todo) => (
      <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        text={todo.text}
      />
    ))

    return (
      <div>
        <h1>오늘 뭐하지?</h1>
        {/* <p>{content}</p>*/}
        <h1>myCounter</h1>
        <button>+</button>
        <button>-</button>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={input} />
          <button type="submit">추가하기</button>
        </form>
        <ul>{todoItemList}</ul>
      </div>
    )
  }
}

export default TodoList
