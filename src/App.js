import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';
import PageLayout from './components/PageLayout';
import { AppProvider } from './components/AppContext';

function App() {
    return (
        <AppProvider>
        <Router> 
            <div>
                <Header />
                <PageLayout />
            </div>
        </Router>
        </AppProvider>
    );
}

export default App;
