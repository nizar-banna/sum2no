import React , { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      number1:0,
      number2:0,
      result:0
        }
  }


        doAction = () => {
          this.setState({ result: parseInt(this.state.number1,10)+parseInt(this.state.number2,10)});
        }

    render(){
      return (
        <div className="App">
          <div className="title">
          Sum 2 Numbers
          </div>
            <div className="form-inline">
              <div className= "form-group">
                <input
                  className="form-group-items"
                  type="number"
                  placeholder="Enter 1st No."
                  onChange={(event) => this.setState({number1:event.target.value})}
                />+
                <input
                  className="form-group-items"
                  type="number"
                  placeholder="Enter 2nd No."
                  onChange={(event) => this.setState({number2:event.target.value})}

                />

                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.doAction.bind(this)}
                >Add
                </button>

                <input type='text' value={this.state.result} readOnly/>

              </div>
            </div>
        </div>
      )
    }
}
  // const mapStateToProps = state => {
  //   return
  //   {
  //     num1:state.num1,
  //     num2:state.num2,
  //     result:state.add_result
  //   }
  // }
export default (App);
