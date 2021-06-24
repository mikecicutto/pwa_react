import React from 'react';

import { fetchWeather } from './api/fetchWeather'
import './App.css'

const App = () => {
    const [ query, setQuery ] = useState('');

    const search = async (e) => {
        
    }

    return (
        <div className="main-container">
            <input 
                type="text"
                className="search"
                placeholder="Search..."
                value={}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default App;