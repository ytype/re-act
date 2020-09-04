import React, {Component} from 'react'

interface Props {
    text: string,
    done: boolean,
    onToggle(): void,
    onRemove(): void
}

class TodoItem extends Component<Props> {
    render(){
        return (
<li>
    <b
        onClick={this.props.onToggle}
        style={{
            textDecoration: this.props.done ? 'line-through' : 'none'
        }}
    >
        {this.props.text}
    </b>
    <button style={{all: 'unset' , marginLeft: '0.5rem'}} onClick={this.props.onRemove}>[지우기]</button>
</li>
        )
    }
}

export default TodoItem