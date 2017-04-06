var MessageBox = React.createClass({
    getInitialState : function () {
        return {
            titleMessage:'你好世界（来自state）',
            isVisible : true,
            subMessages : [
                '我会搬砖',
                '以及花样搬砖',
                '老板叫我去搬砖...'
            ]
        }
    },
    render : function () {
        var styleObj = {display : this.state.isVisible ? 'block' : 'none'}
        return (
            <div>
                <h1>{this.state.titleMessage}</h1>
                <h1>{this.props.title}</h1>
                <SubMessage messages={this.state.subMessages}/>
            </div>
        )
    }
});

var SubMessage = React.createClass({
    propTypes : {
        messages:React.PropTypes.array.isRequired
    },
    getDefaultProps : function () {
        return {
            messages : ['默认的消息！']
        }
    },
    render : function () {
        var msgs = [];
        this.props.messages.forEach(function (msg, index) {
            msgs.push(<p>码农说：{msg}</p>)
        });
        return (
            <div>
                <h2>{msgs}</h2>
                <Footer />
            </div>
        )
    }
});

var Footer = React.createClass({
    render : function () {
        return <h3>因为我们在创造！</h3>
    }
});

var title = '世界你好（来自props）';

ReactDOM.render(
    <MessageBox title={title} />,
    document.getElementById('demo')
)