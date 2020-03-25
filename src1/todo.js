// Input component
class Input extends React.Component {
  state = {
    title: "",
    deadline: "",
    isCompleted: false
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return nextProps.editTodoData;
  // }

  componentDidMount = () => {
    console.log("input CDM", this.props);
  }
  
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.editTodoData !== this.props.editTodoData) {
  //     this.setState(this.props.editTodoData);
  //   }
  // }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("input CDU", this.props, prevProps);
    if (prevProps.editTodoData !== this.props.editTodoData) {
      this.setState({
        title: this.props.editTodoData.title,
        deadline: this.props.editTodoData.deadline,
        isCompleted: this.props.editTodoData.isCompleted
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({
      title: event.target.value
    });
    console.log(event.target.value, this.state);
  }

  handleDeadlineChange = (event) => {
    this.setState({
      deadline: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.handleInputChange(event)} value={this.state.title} type="text" placeholder="Title" />
        <input onChange={(event) => this.handleDeadlineChange(event)} value={this.state.deadline} type="date" />
        { !this.props.isEdit && <button onClick={() => this.props.sendTodoFromInput(this.state)}>Save</button> }
        { this.props.isEdit && <button onClick={() => this.props.sendTodoFromInput(this.state)}>Edit</button> }
      </div>
    );
  }
}
    
// List Component
class List extends React.Component {
  render() {
    return (
      <ul>
        {/* Data list here, as many lis as there are todos */}
        { this.props.todos.map((todo, index) => {
          return (
            <li key={index}>{todo.title}, {todo.deadline}, {todo.isCompleted.toString()}
              <button onClick={() => this.props.editTodo(index)}>Edit</button>
              <button onClick={() => this.props.deleteTodo(index)}>Delete</button>
            </li>
          );
        }) }
      </ul>
    );
  }
}
    
// Wrapper component
class Wrapper extends React.Component {
  state = {
    todos: [
      {
        title: "First",
        deadline: "2020-01-08",
        isCompleted: false
      },
      {
        title: "Second",
        deadline: "2020-01-08",
        isCompleted: false
      },
      {
        title: "Third",
        deadline: "2020-01-08",
        isCompleted: false
      },
    ],
    isEdit: false,
    editTodoIndex: "",
    editTodoData: ""
  }

  addTodoToList = (todo) => {
    let newTodos = this.state.todos.slice();
    newTodos[this.state.editTodoIndex] = todo;
    if (this.state.isEdit) {
      this.setState((prevState) => ({
        todos: newTodos
      }));
    } else {
      this.setState({
        todos: [...this.state.todos, todo]
      });
    }
  }

  deleteTodoFromList = (index) => {
    let newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  }

  editTodoInList = (index) => {
    this.setState({
      isEdit: true,
      editTodoIndex: index,
      editTodoData: this.state.todos[index]
    })
  }

  render() {
    return (
      <div>
        <Input isEdit={this.state.isEdit} editTodoData={this.state.editTodoData} sendTodoFromInput={(todo) => this.addTodoToList(todo)} />
        <List todos={this.state.todos} deleteTodo={(index) => this.deleteTodoFromList(index)} editTodo={(index) => this.editTodoInList(index)} />
      </div>
    )
  }
}