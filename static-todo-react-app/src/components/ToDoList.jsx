

const ToDoList = () => {
    let tasks = [
        "Learn React",
        "Build a project", 
        "Read documentation"
    ];
    return (
        <ul>
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
    )
}

export default ToDoList;