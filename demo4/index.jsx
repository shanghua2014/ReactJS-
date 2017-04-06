var MessageBox = React.createClass({
    getInitialState : function () {
        return {
            clickCount:0
        }
    },
    handleClick : function (e) {
        this.setState({
            clickCount : this.state.clickCount + 1
        });
        console.log(e.eventPhase);
    },
    render : function () {
        return (
            <div>
                <SubMessage />
                <button onClick={this.handleClick}>点我</button>
                <div>世界，你好！你被点过{this.state.clickCount}次</div>
            </div>
        )
    }
});

var SubMessage = React.createClass({
    render : function () {
        return (
            <div>
                <h1>写代码很有意思！</h1>
            </div>
        )
    }
});


ReactDOM.render(
    <MessageBox />,
    document.getElementById('demo')
)