var FormApp = React.createClass({
    getInitialState : function () {
        return {
            inputValue : 'input vale',
            selectValue : 'A',
            radioValue : 'B',
            textareaValue : 'some text here ......'
        }
    },
    handleSubmti : function (e) {
        e.preventDefault();
        console.log('form submit...');
        console.log(e)
    },
    handleInput : function (e) {
        this.setState({
            inputValue : e.target.value
        })
    },
    render : function () {
        return (
            <form>
                <input type="text" value={this.state.textareaValue} onChange={this.handleInput}/>
                <select value="B" value={this.state.selectValue}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select><br/>
                <p>radio button</p>
                <input type="radio" name="goodRaido" value="A"/>
                <input type="radio" name="goodRaido" value="B" defaultChecked/>
                <input type="radio" name="goodRaido" value="C"/>
                <br/>
                <p>checkbox button</p>
                <input type="checkbox" name="goodCheck" value="A"/>
                <input type="checkbox" name="goodCheck" value="B"/>
                <input type="checkbox" name="goodCheck" value="C" checked/>
                <br/>
                <textarea value="some text here again ..."></textarea>
                <input type="submit" value="提交" onClick={this.handleSubmti} />
            </form>
        )
    }
});


ReactDOM.render(
    <FormApp />,
    document.getElementById('demo')
)