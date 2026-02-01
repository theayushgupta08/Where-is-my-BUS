import { styles } from '../styles';
import { BusCanvas } from './canvas';
import Cards from './Cards';
import { operations } from '../constants';
import Chatbot from './Chatbot';
import DriverDashboard from './DriverDashboard';
import PassengerDashboard from './PassengerDashboard';

const Hero = () => {
    const userRole = localStorage.getItem('userRole') || 'admin';
    const username = localStorage.getItem('username') || 'User';

    // Show different dashboards based on role
    if (userRole === 'driver') {
        return <DriverDashboard username={username} />;
    }

    if (userRole === 'passenger') {
        return <PassengerDashboard username={username} />;
    }

    // Admin dashboard (default)
    return (
        <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-screen mx-auto flex flex-col md:flex-row pt-20' style={{ backgroundColor: '#050816' }}>
            <div className='flex flex-col w-full md:w-1/2 h-full'>
                <div className='absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-col items-center md:items-start md:right-32 px-4 md:px-0'>
                    <div>
                        <h1 className={`${styles.heroSubText} text-orange-600 text-center md:text-left`}>Welcome</h1>
                        <p className={`${styles.heroHeadText} mt-1 text-orange-400 text-center md:text-left`}>Super <span className='text-orange-600'>Admin</span>!</p>
                    </div>
                </div>
                <div className='flex-grow mt-20 md:mt-0'>
                    <BusCanvas />
                </div>
            </div>
            <div className='flex flex-col cursor-pointer w-full md:w-1/2 mt-20 md:mt-0 md:ml-16 px-4 md:px-0 md:items-center'>
                <Cards actions={operations} />
                <Chatbot />
            </div>
        </section>
    )
}

export default Hero;