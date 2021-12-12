import './NotFound.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
      }, [navigate]);
    return (
        <div id="notfound">
           
            <h1 >Page Not Found!</h1>
        </div>
    )
}