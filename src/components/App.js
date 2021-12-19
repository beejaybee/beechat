import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from './Login';
import Chat from './Chat'
import { AuthProvider } from '../context/AuthContext';

const App = () => {
    return (
        <div style={{fontFamily: 'Avenir'}}>
            <Router style={{ fontFamily: 'Avenir' }}>
                <AuthProvider>
                    <Routes>
                        <Route path='/chats' element={<Chat />}/>
                        <Route path='/' element={<Login />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default App