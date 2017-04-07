var MessageBox = React.createClass({
    getDefaultProps : function () {
        console.log('getDefaultProps');
        return {}
    },
    getInitialState : function () {
        console.log('getInitialState');
        return {
            count:0
        }
    },
    componentWillMount : function () {
        console.log('componentWillMount');
        var self = this;
        this.timer = setInterval(function () {
            self.setState({
                count : self.state.count + 1
            })
        }, 1000);
    },
    componentDidMount : function () {
        console.log('componentDidMount')
        console.log(ReactDOM.findDOMNode(this)+'用来做ajax返回操作')
    },
    componentWillUnmount : function () {
        alert('你正在尝试删除我！');
        clearInterval(this.timer)
    },
    delete : function () {
        ReactDOM.unmountComponentAtNode(document.getElementById('demo'))
    },
    render : function () {
        return (
            <div>
                <h1>计数：{this.state.count}</h1>
                <SubMessage />
                <button onClick={this.delete}>点击删除了！</button>
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