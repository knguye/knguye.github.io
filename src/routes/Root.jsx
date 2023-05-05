import * as React from 'react';
import '../styles/common.css'
import { useNavigate, Outlet, Link } from 'react-router-dom';
import Home from './Home';
import NavbarTW from '../components/NavbarTW';
import { Provider } from 'react-redux';
import store from '../store';

export default function Root() {
    const navigate = useNavigate();
    const [currentRoute, setCurrentRoute] = React.useState('/')
    const [currentCategory, setCurrentCategory] = React.useState('');

    React.useEffect(() => {
        setCurrentCategory(localStorage.getItem("category"));
    })
    
    return (
        <Provider store={store}>
            <NavbarTW setCurrentRoute={setCurrentRoute}></NavbarTW>
            <div className="bg-gray-800" style={{ backgroundColor: '#1f2937'}}>
                {currentRoute === 'root' ? <Home/> : <Outlet/>}
            </div>
        </Provider>
    )
}