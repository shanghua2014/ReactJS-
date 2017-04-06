var FormApp = React.createClass({
    getInitialState : function () {
        return {
            inputValue : 'input value',
            selectValue : 'A',
            radioValue : 'B',
            checkValue : [],
            textareaValue : 'some text here ......'
        }
    },
    handleSubmit : function (e) {
        e.preventDefault();
        var formDatas = {
            input : ReactDOM.findDOMNode(this.refs.goodInput).value,
            select : ReactDOM.findDOMNode(this.refs.goodSelect).value,
            textarea : ReactDOM.findDOMNode(this.refs.goodTextarea).value,
            radio : this.state.radioValue,
            check : this.state.checkValue
        }
        console.log('form result datas:');
        console.log( formDatas )
        this.refs.goodRadio.saySoming()
    },
    handleRadio : function (e) {
        this.setState({
            radioValue : e.target.value
        })
    },
    handleCheck : function (e) {
        var checkValues = this.state.checkValue.slice();
        var newValue = e.target.value;
        var index = checkValues.indexOf(newValue);
        if (index == -1) {
            checkValues.push(newValue);
        } else {
            checkValues.splice(index, 1);
        }
        this.setState({
            checkValue:checkValues
        })
    },
    render : function () {
        return (
            <form>
                <input type="text" ref={function (comp) { ReactDOM.findDOMNode(comp).focus() }} defaultValue={this.state.inputValue} />
                <select value="B" defaultValue={this.state.selectValue} ref="goodSelect">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br/>

                <p>radio button</p>
                <RadioBox ref="goodRadio" handleRadio={this.handleRadio}/>
                <br/>

                <p>checkbox button</p>
                <CheckBox handleCheck={this.handleCheck}/>
                <br/>

                <textarea defaultValue="some text here again ..." ref="goodTextarea"></textarea>
                <input type="submit" value="提交" onClick={this.handleSubmit} />
            </form>
        )
    }
});
var RadioBox = React.createClass({
    saySoming : function () {
        alert('hi man!')
    },
    render : function () {
        return (
            <div>
                <input onChange={this.props.handleRadio} type="radio" value="A" defaultChecked/>
                <input onChange={this.props.handleRadio} type="radio" value="B"/>
                <input onChange={this.props.handleRadio} type="radio" value="C"/>
            </div>
        )
    }
});
var CheckBox = React.createClass ({
    render : function () {
        return (
            <div>
                A:<input onChange={this.props.handleCheck} type="checkbox" value="A"/>
                B:<input onChange={this.props.handleCheck} type="checkbox" value="B"/>
                C:<input onChange={this.props.handleCheck} type="checkbox" value="C"/>
            </div>
        )
    }
});
ReactDOM.render(
    <FormApp />,
    document.getElementById('demo')
)