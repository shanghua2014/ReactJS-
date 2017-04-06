var MessageBox = React.createClass({
    render : function () {
        var submessages = [];
        for (var i=0; i<5; i++) {
            submessages.push(<SubMessage key={'sub'+i}></SubMessage>)
        }

        return (
            <div>
                <div onClick={this.alertMsg}>世界，你好！</div>
                {submessages}
            </div>
        )
    }
});

var SubMessage = React.createClass({
    render : function () {
        return (
            <div>
                <h1>写代码很有意思！</h1>
                <Footer></Footer>
            </div>
        )
    }
});

var Footer = React.createClass({
    render : function () {
        return <h2>因为我们在创造！</h2>
    }
});

ReactDOM.render(
    <MessageBox />,
    document.getElementById('demo')
)