import { Link } from 'react-router-dom';

const Navigator = () => {
    return (
        <div className='navigator'>
            <Link to='/'>Home</Link>
            &nbsp;|&nbsp;
            <Link to='/courses'>Courses</Link>
            &nbsp;|&nbsp;
            <Link to='/students'>Students</Link>
        </div>
    );
}

export default Navigator;