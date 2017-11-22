/**
 * Created by yarivkatz on 22/11/2017.
 */


console.log('creating hello world component')

class HelloWorldComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isVisible : true,
            greetings: []
        }
    }

    onAlertClicked(event) {
        alert(this.props.message);
    }

    toggleVisibility() {
        this.setState(function(state){
            return {
                isVisible: !state.isVisible
            }
        });
    }

    addGreeting(event){
        console.log(this.greetingInput.value);
        this.setState(function(oldState){
            const newGreetings = oldState.greetings.splice(0);
            newGreetings.push(this.greetingInput.value);
            return {
                greetings: newGreetings
            }
        });
        event.preventDefault();
    }

    render () {
        console.log('rendering hello world component');
        const message = this.props.message;
        const isVisible = this.state.isVisible;
        return (
            <div>
                {
                    isVisible ? <h1>{message}</h1> : null
                }
                <button onClick={this.onAlertClicked.bind(this)}>Alert</button>
                <button onClick={this.toggleVisibility.bind(this)}>Toggle Visibility</button>
                <br/>
                <form onSubmit={this.addGreeting.bind(this)}>
                    <label>Enter greeting:</label><br/>
                    <input ref={(domElementInput) => {this.greetingInput = domElementInput}} type="text" name="greeting" />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {
                        this.state.greetings.map(function(greetingItem){
                            return <li>{greetingItem}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorldComponent  message="hello from property" />,
    document.getElementById('container')
);