import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components shown from App component
import Header from './Header';
// import SideBar from './SideBar';

// Pages to navigate between using React-router
import Calendar from '../pages/Calendar';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/pages/calendar" exact component={Calendar} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
