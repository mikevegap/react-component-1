webpackJsonp([5],{43:function(e,t,n){var a=React.createClass({displayName:"Example",getColors:function(e){var t=["#feeeed","#f47920","#80752c","#2a5caa","#f7acbc","#deab8a","#837936","#444693","#ef5b9c","#fedcbd","#7f7522","#2b4490","#f05b72","#905a3d","#87843b","#224b8f"];return t[e%t.length]},getSlides:function(e,t,n){for(var a=[],i=0;e>i;i++){var l={backgroundColor:this.getColors(i),width:"undefined"!=typeof t?Math.random()*(n-t)+t:""};a.push(React.createElement(RUI.Slider.Item,{key:i},React.createElement("div",{className:"slide-content",style:l},"Slide-",i+1)))}return a},getImageSlide:function(){return["http://5doe.com/custom/demo/images/wave_photo_1.jpg","http://5doe.com/custom/demo/images/wave_photo_2.jpg","http://5doe.com/custom/demo/images/wave_photo_3.jpg","http://5doe.com/custom/demo/images/wave_photo_4.jpg"].map(function(e,t){return React.createElement(RUI.Slider.Item,{key:t},React.createElement("img",{src:e,style:{height:300}}))})},getThumbSlide:function(){return["http://5doe.com/custom/demo/images/wave_photo_1.jpg","http://5doe.com/custom/demo/images/wave_photo_2.jpg","http://5doe.com/custom/demo/images/wave_photo_3.jpg","http://5doe.com/custom/demo/images/wave_photo_4.jpg"].map(function(e,t){return React.createElement(RUI.Slider.Item,{key:t},React.createElement("img",{src:e,style:{height:80}}))})},componentDidMount:function(){this.refs.big.setControl(this.refs.thumb.getSwiper()),this.refs.thumb.setControl(this.refs.big.getSwiper())},render:function(){return React.createElement("div",{className:"example-slider"},React.createElement("h2",{className:"title"},"轮播图",React.createElement("span",null,"Slider")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"自动播放"),React.createElement("div",null,React.createElement(RUI.Slider,null,this.getSlides(4))),React.createElement("h4",{className:"final-title"},"分页信息"),React.createElement("div",null,React.createElement(RUI.Slider,null,this.getSlides(6),React.createElement(RUI.Slider.Pagination,{useClick:!0}))),React.createElement("h4",{className:"final-title"},"左右切换按钮"),React.createElement("div",null,React.createElement(RUI.Slider,null,this.getSlides(8),React.createElement(RUI.Slider.Pagination,{useClick:!0}),React.createElement(RUI.Slider.NavigateButton,{role:"prev"}),React.createElement(RUI.Slider.NavigateButton,{role:"next"}))),React.createElement("h4",{className:"final-title"},"不规则自动布局"),React.createElement("div",null,React.createElement(RUI.Slider,{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,className:"auto-layout"},this.getSlides(18,150,600),React.createElement(RUI.Slider.Pagination,{useClick:!0}))),React.createElement("h4",{className:"final-title"},"缩略图"),React.createElement("div",null,React.createElement(RUI.Slider,{ref:"big",centeredSlides:!0},this.getImageSlide()),React.createElement(RUI.Slider,{ref:"thumb",thumb:!0},this.getThumbSlide(8)))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:n(93)})))}});e.exports=a},93:function(e,t){e.exports="var Example = React.createClass({\n    getColors:function(index) {\n        var colors = [\n            '#feeeed', '#f47920', '#80752c', '#2a5caa',\n            '#f7acbc', '#deab8a', '#837936', '#444693',\n            '#ef5b9c', '#fedcbd', '#7f7522', '#2b4490',\n            '#f05b72', '#905a3d', '#87843b', '#224b8f'\n        ];\n        return colors[index % colors.length];\n    },\n    getSlides:function(num, minWidth, maxWidth) {\n        var result = [];\n        for(var index =0;index<num;index++) {\n            var styles = {\n                backgroundColor:this.getColors(index),\n                width:(typeof minWidth != 'undefined') ? (Math.random() * (maxWidth - minWidth) + minWidth) : ''\n            };\n            result.push(<RUI.Slider.Item key={index}>\n                <div className=\"slide-content\" style={styles}>\n                    Slide-{index+1}\n                </div>\n            </RUI.Slider.Item>);\n        }\n        return result;\n    },\n    getImageSlide:function() {\n        return [\n            'http://5doe.com/custom/demo/images/wave_photo_1.jpg',\n            'http://5doe.com/custom/demo/images/wave_photo_2.jpg',\n            'http://5doe.com/custom/demo/images/wave_photo_3.jpg',\n            'http://5doe.com/custom/demo/images/wave_photo_4.jpg'\n        ].map(function(image, index) {\n            return <RUI.Slider.Item key={index}>\n                <img src={image} style={{height:300}} />\n            </RUI.Slider.Item>\n        });\n    },\n    getThumbSlide:function() {\n        return [\n            'http://5doe.com/custom/demo/images/wave_photo_1.jpg',\n            'http://5doe.com/custom/demo/images/wave_photo_2.jpg',\n            'http://5doe.com/custom/demo/images/wave_photo_3.jpg',\n            'http://5doe.com/custom/demo/images/wave_photo_4.jpg'\n        ].map(function(image, index) {\n            return <RUI.Slider.Item key={index}>\n                <img src={image} style={{height:80}}/>\n            </RUI.Slider.Item>\n        });\n    },\n    componentDidMount:function() {\n        this.refs.big.setControl(this.refs.thumb.getSwiper());\n        this.refs.thumb.setControl(this.refs.big.getSwiper());\n    },\n    render:function() {\n        return <div className=\"example-slider\">\n            <h2 className=\"title\">轮播图<span>Slider</span></h2>\n            <h3 className=\"sub-title\">演示</h3>\n            <div className=\"example\">\n                <h4 className=\"final-title\">自动播放</h4>\n                <div>\n                    <RUI.Slider>\n                        {this.getSlides(4)}\n                    </RUI.Slider>\n                </div>\n                <h4 className=\"final-title\">分页信息</h4>\n                <div>\n                    <RUI.Slider>\n                        {this.getSlides(6)}\n                        <RUI.Slider.Pagination useClick={true} />\n                    </RUI.Slider>\n                </div>\n                <h4 className=\"final-title\">左右切换按钮</h4>\n                <div>\n                    <RUI.Slider>\n                        {this.getSlides(8)}\n                        <RUI.Slider.Pagination useClick={true} />\n                        <RUI.Slider.NavigateButton role=\"prev\" />\n                        <RUI.Slider.NavigateButton role=\"next\" />\n                    </RUI.Slider>\n                </div>\n                <h4 className=\"final-title\">不规则自动布局</h4>\n                <div>\n                    <RUI.Slider slidesPerView={\"auto\"} centeredSlides={true} spaceBetween={30} className={\"auto-layout\"}>\n                        {this.getSlides(18, 150, 600)}\n                        <RUI.Slider.Pagination useClick={true} />\n                    </RUI.Slider>\n                </div>\n                <h4 className=\"final-title\">缩略图</h4>\n                <div>\n                    <RUI.Slider ref=\"big\" centeredSlides={true}>\n                        {this.getImageSlide()}\n                    </RUI.Slider>\n                    <RUI.Slider ref=\"thumb\" thumb={true}>\n                        {this.getThumbSlide(8)}\n                    </RUI.Slider>\n                </div>\n            </div>\n            <h3 className=\"sub-title\">源码</h3>\n            <div className=\"source\">\n                <textarea defaultValue={require('raw!./slider.js')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;"}});