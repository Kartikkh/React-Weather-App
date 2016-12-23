var React = require('react');

var WeatherForm = React.createClass({
    OnFormSubmit : function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length>0){
        this.refs.location.value='';
        this.props.onSearch(location);
    }
},
    render: function () {
        return (
           <div>
               <form onSubmit={this.OnFormSubmit}>
                   <input type="text" ref="location"/>
                   <button>Get Weather</button>
               </form>
           </div>
        );
    }
});
module.exports = WeatherForm;