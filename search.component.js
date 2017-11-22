/**
 * Created by yarivkatz on 22/11/2017.
 */

class SearchComponent extends React.Component {
    searchTasks(event){
        const searchString = this.searchInput.value;
        const oldTasks = this.props.tasksFromReduxStore.splice(0);
        const newTasks = oldTasks.filter(function(task){
            return task.title.indexOf(searchString) != -1;
        });
        this.props.setTasksInProps(newTasks);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.searchTasks.bind(this)}>
                <div className="form-group">
                    <input type="text" name="search" ref={(domElement) => {this.searchInput = domElement;}} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
        )
    }
}

var SearchComponentSmart = ReactRedux.connect(
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
)(SearchComponent);