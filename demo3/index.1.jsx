var ClickDemo = React.createClass ({
    getInitialState : function () {
        return {
            clickCount : 0
        }
    },
    handleClick : function () {
        if (this.state.clickCount>=10) {
            alert('你点的太多了！');
            return;
        }
        this.setState({
            clickCount : this.state.clickCount + 1
        })
    },
    render : function () {
        return (
            <div>
                <button onClick={this.handleClick}>点我</button>
                <h1>你点了我：{this.state.clickCount}次</h1>
            </div>
        )
    }
});

ReactDOM.render(
    <ClickDemo />,
    document.getElementById('demo')
)