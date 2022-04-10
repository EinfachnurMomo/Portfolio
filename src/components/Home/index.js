/* jshint esversion: 11 */
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I´m
                <img src={LogoTitle} alt="developer" />
                Momo
                <br />
                Software Developer
                </h1>
                <h2>Backend Developer / C# lover / Gamer</h2>
                <Link to="/contact" className='flat-button'>Contact me</Link>
            </div>
        </div>
    );
}

export default Home;