webpackJsonp([11],{37:function(e,t,a){var n=React.createClass({displayName:"Example",getInitialState:function(){return{init:"init string"}},onInputChange:function(e){RUI.DialogManager.alert("change:"+e.target.value,"提示")},blurHandler:function(e){this.setState({init:Math.random()})},render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"输入框",React.createElement("span",null,"Input")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"输入框"),React.createElement("div",null,React.createElement(RUI.Input,{value:this.state.init,onChange:this.onInputChange}),React.createElement("br",null),React.createElement(RUI.Input,{className:"small",mode:"static",value:"不可修改"}),React.createElement("br",null),React.createElement(RUI.Input,{onBlur:this.blurHandler,className:"medium",placeholder:"保留正常结点属性"}),React.createElement("br",null),React.createElement(RUI.Input,{className:"large"}),React.createElement("br",null),React.createElement(RUI.Input,{className:"full"})),React.createElement("h4",{className:"final-title"},"文本域"),React.createElement("div",null,React.createElement(RUI.Textarea,{value:this.state.init}))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:a(87)})))}});e.exports=n},87:function(e,t){e.exports='var Example = React.createClass({\n    getInitialState:function() {\n        return {\n            init:"init string"\n        }\n    },\n    onInputChange:function(e) {\n        RUI.DialogManager.alert("change:" + e.target.value, "提示");\n    },\n    blurHandler:function(e) {\n        this.setState({\n            init:Math.random()\n        });\n    },\n    render:function() {\n        return <div className="example-input">\n            <h2 className="title">输入框<span>Input</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <h4 className="final-title">输入框</h4>\n                <div>\n                    <RUI.Input value={this.state.init} onChange={this.onInputChange} /><br/>\n                    <RUI.Input className="small" mode="static" value={"不可修改"}/><br/>\n                    <RUI.Input onBlur={this.blurHandler} className="medium" placeholder="保留正常结点属性"/><br/>\n                    <RUI.Input className="large"/><br/>\n                    <RUI.Input className="full"/>\n                </div>\n                <h4 className="final-title">文本域</h4>\n                <div>\n                    <RUI.Textarea value={this.state.init} />\n                </div>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./input.js\')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});