
var GreetingMessage = React.createClass({
    render : function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
          <div>
              <h1> {name}</h1>
              <p> {message}</p>
          </div>
        );
    }
});

var GreeterForm = React.createClass({

    onFormSubmit:function (e) {
        var update = {};
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        if(name.length>0){
            this.refs.name.value='';
            update.name = name;
        }

        if(message.length>0){
            this.refs.message.value = '';
            update.message = message;
        }
        this.props.onNewName(update);
    },
    render : function () {
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="name" placeholder="Enter name" ref="name"/>
                <textarea type="message" placeholder="Enter Message" ref="message"/>
                <button> Set name </button>

            </form>
        );
    }

});
var Greeting = React.createClass({
    getDefaultProps: function () {
      return {
             name : 'React',
             Message : "This is Default Messages"
      }
    },
    getInitialState : function () {
      return {
          name:this.props.name,
          message:this.props.message
      };
    },
    handelNewName : function (update) {
       this.setState(update)
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        return(
            <div>
                <GreetingMessage name={name} message ={message}/>
               <GreeterForm onNewName={this.handelNewName}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Greeting name="kartik" message="Welcome"/>,
    document.getElementById("app")
);
