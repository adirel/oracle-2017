/**
 * Created by yarivkatz on 22/11/2017.
 */


class AppComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-4">
                        <TaskFormComponentSmart />
                        <SearchComponentSmart />
                        <TaskListComponentSmart />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ReactRedux.Provider store={store}><AppComponent/></ReactRedux.Provider>, document.getElementById('container'));