var EasyForm  = React.createClass({
    mixins : [React.addons.LinkedStateMixin],
    getInitialState : function () {
        return {
            message : 'React呀！',
            isReactAwesome : true
        }
    },
    render : function () {
        return (
            <div>
                <h1>我想说：{this.state.message}</h1>
                <h2>React是不是很好用?&nbsp;&nbsp;{this.state.isReactAwesome ? '非常好用！' : '一般。。。'}</h2>
                <input type="text" valueLink={this.linkState('message')} />
                <br/>
                <input type="checkbox" checkedLink={this.linkState('isReactAwesome')} />

                <SubComp messageLink={this.linkState('message')} likeLink={this.linkState('isReactAwesome')} />
            </div>
        )
    }
});
var SubComp = React.createClass({
    render : function () {
        return (
            <div>
                <p>这是一个子组件！</p>
                <SubsubComp { ... this.props }/>
            </div>
        )
    }
});
var SubsubComp = React.createClass({
    render : function () {
        return (
            <div>
                <p>你想说什么？</p>
                <input type="text" valueLink={this.props.messageLink} />
                <p>React用起来怎么样？</p>
                <input type="checkbox" checkedLink={this.props.likeLink} />
            </div>
        )
    }
});
ReactDOM.render(
    <EasyForm />,
    document.getElementById('demo')
)