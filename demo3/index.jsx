var MessageBox = React.createClass({
    getInitialState : function () {
        return {
            isVisible : true,
            titleMessage : '你好世界（来自state）'
        }
    },
    render : function () {
        var styleObj = {display : this.state.isVisible ? 'block' : 'none'}
        return (
            <div>
                <h1 style={styleObj} onClick={this.alertMsg}>世界，你好！</h1>
                <SubMessage />
            </div>
        )
    }
});

var SubMessage = React.createClass({
    render : function () {
        return (
            <div>
                <h2>写代码很有意思！</h2>
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
 
var messageBox = ReactDOM.render(
    <MessageBox />,
    document.getElementById('demo')
)