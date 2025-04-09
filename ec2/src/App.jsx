import './App.css'
import { Link } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  // const nav = useNavigate()

  return ( 
    <div style={{color: '#000'}}>
        <h1>This is where we landed!</h1>
        <Link to='/testpage' >CLICK HERE!</Link>
    </div>
  )
}

export default App
