import './App.css'
import {connect} from 'react-redux'
import {IncAction,DecAction} from './actions'

const App = ({localVariable,IncAction,DecAction}) => {
return (
<>
<h1 style={{textAlign: "center"}}>{localVariable}</h1>
<button onClick={()=>IncAction(1)}>Increment</button>
<button onClick={()=>DecAction(1)}>Decrement</button>
</>
)


}


const mapStateToProps = state =>({
  localVariable : state
})

export default connect(mapStateToProps,{IncAction,DecAction})(App)