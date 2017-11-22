/**
 * Created by yarivkatz on 22/11/2017.
 */

class TaskListComponent extends React.Component {
    render () {
        const tasks = this.props.tasks;
        return (
            <ul>
                {
                    tasks.map(function(singleTask) {
                        return <li>
                            <h1>{singleTask.title}</h1>
                            <p>{singleTask.description}</p>
                        </li>
                    })
                }
            </ul>
        );
    }
}

var TaskListComponentSmart = ReactRedux.connect(
    function(state) {
        return {
            tasks: state.tasks
        }
    },
    null
)(TaskListComponent);