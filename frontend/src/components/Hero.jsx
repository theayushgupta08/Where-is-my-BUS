import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BusCanvas } from './canvas';
import Cards from './Cards';
import { operations } from '../constants';

const Hero = () => {
    return (
        <section className='bg-hero-pattern bg-cover bg-fixed bg-no-repeat bg-center relative w-full h-screen mx-auto flex flex-col md:flex-row' style={{ backgroundColor: '#050816' }}>
            <div className='flex flex-col w-full md:w-1/2 h-full'>
                <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center md:items-start md:right-32 px-4 md:px-0'>
                    <div>
                        <h1 className={`${styles.heroSubText} text-orange-600 text-center md:text-left`}>Welcome</h1>
                        <p className={`${styles.heroHeadText} mt-1 text-orange-400 text-center md:text-left`}>Super <span className='text-orange-600'>Admin</span>!</p>
                    </div>
                </div>
                <div className='flex-grow mt-20 md:mt-0'>
                    <BusCanvas />
                </div>
            </div>
            <div className='flex flex-col w-full md:w-1/2 mt-20 md:mt-0 md:ml-16 px-4 md:px-0 md:items-center'>
                <Cards actions={operations} />
            </div>
        </section>
    )
}

export default Hero;