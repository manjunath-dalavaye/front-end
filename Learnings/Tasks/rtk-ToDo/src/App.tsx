import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import TodoList from './components/ToDoList';
import SuccessPage from './components/successPage';
import TaskDescription from './components/TaskDescription';
 
 
 
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/description/:id" element={<TaskDescription />} />
                    <Route path="/todos" element={<TodoList />} />
                    <Route path="/success" element={<SuccessPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};
 
export default App;