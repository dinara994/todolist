import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todo from './components/Todo'

const App = () => {
    return (
        <Router className="App">
            <Route exact path='/'> <Todo/> </Route>
        </Router>
    );
}

export default App;
