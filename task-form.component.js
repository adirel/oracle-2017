/**
 * Created by yarivkatz on 22/11/2017.
 */


class TaskFormComponent extends React.Component {
    addNewTask(event) {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const when = this.dateInput.value;
        const newTask = new Task(title, description, when);
        const oldTasks = this.props.tasksFromReduxStore.splice(0);
        oldTasks.push(newTask);
        this.props.setTasksInProps(oldTasks);
        event.preventDefault();
    }

    render() {
        const tasks = this.props.tasksFromReduxStore;
        const actionFunction = this.props.setTasksInProps;
        return (
            <form onSubmit={this.addNewTask.bind(this)}>
                <div className="form-group">
                    <label>Title</label>
                    <input ref={(domElement) => {this.titleInput = domElement}} type="text" className="form-control" name="title" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea ref={(domElement) => {this.descriptionInput = domElement}} className="form-control" name="description" />
                </div>
                <div className="form-group">
                    <label>When</label>
                    <input ref={(domElement) => {this.dateInput = domElement}} type="date" className="form-control" name="when" />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

var TaskFormComponentSmart = ReactRedux.connect(
    function(state){
        return {
            tasksFromReduxStore: state.tasks
        }
    },
    function(dispatch){
        return {
            setTasksInProps: function(tasks){
                dispatch(setTasks(tasks))
            }
        }
    }
)(TaskFormComponent);