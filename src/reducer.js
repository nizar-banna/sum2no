import {} from './action'

const addAction=  () =>{
  // this.setState({ result: parseInt(this.state.number1)+parseInt(this.state.number2)})
  // console.log(result);
}
const INITIAL_STATE = {};
export default (state = INITIAL_STATE , action) => {
  if(action.type === 'ADD_ACTION' ){
  return  addAction();

    }
  return state;
}
