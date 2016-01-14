import className from '../../util/className.jsx';
import ComponentBase from '../../mixins/ComponentBase.jsx';

module.exports = React.createClass({
    mixins:[ComponentBase],
    getInitialState:function() {
        return {};
    },
    getDefaultProps:function() {
        return {
            cname:'table-column-item'
        };
    },
    render:function() {
        var classes = className(this.props.className, this.getPropClass());
        return <li {...this.props} className={classes}>
            {this.props.children ? this.props.children : this.props.value}
        </li>;
    }
});