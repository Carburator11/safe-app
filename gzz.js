var Title = React.createClass({
  stuff: ["ducklings", "hairy spiders", "Javascripts"],

  render: function(){
    return (<div style = {titlePanel}>
      <h1>just a  React App</h1>
      <h2 > with mermaids, kittens and <span style = {styleAkira} > {this.stuff[this.props.propTitleNum]}</span> !</h2>
      </div>);
    }
  });

var Pic = React.createClass({

srcArray: ["duck.jpg", "spider.jpg", "js.jpg"],

render: function(){

return (  <div>
<img src = {this.srcArray[this.props.propPicNum]} contain style= {pic} />
</div>);
}});


var Form = React.createClass({

getInitialState: function() {return {checked: '0'} ; },

handleChange: function(event){
  this.setState({checked: event.target.value});
  this.props.propFunc(parseInt(event.target.value));
},

render: function(){
  return( <div > Hello  !
    <fieldset>
    <legend><h2>Preference</h2></legend>
    <form>  What do you prefer most ?<br/>
    <input type="radio" name="choice" value= "0" onChange={this.handleChange} checked= {this.state.checked === '0'} /> ducks    <br/>
    <input type="radio" name="choice" value= "1" onChange={this.handleChange} checked= {this.state.checked === '1'} /> spiders  <br/>
    <input type="radio" name="choice" value= "2" onChange={this.handleChange} checked= {this.state.checked === '2'} /> javascript
    </form>
    </fieldset>

    </div>  );}

  });


  var Parent = React.createClass({

    getInitialState: function() {return {picNum: 0} ; },

    changePicValue: function(e){
      this.setState({picNum : e})
    },



    render: function(){

      return( <div>
        <div className = "banner">
          <div className = "boxPic">
            <Pic  propPicNum = {this.state.picNum} />
          </div>
          <div className = "boxTitle"><Title propTitleNum = {this.state.picNum}/></div>
          <div className = "boxRight"></div>
        </div>

        <div className= "widget">
          <Form propFunc = {this.changePicValue} />
        </div>


      </div>


      );
    }});


ReactDOM.render(<Parent /> , document.querySelector("#parent"));
