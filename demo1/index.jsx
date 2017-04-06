var MessageBox = React.createClass({
        alertMsg : function () {
            alert('你点我了！')
        },
        render : function () {
            return <div onClick={this.alertMsg}>世界，你好！</div>
        }
    });

    ReactDOM.render(
        <MessageBox />,
        document.getElementById('demo')
    )