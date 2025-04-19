// High order component for wrapping 

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-full max-auto relative z-0 items-center`}>
                <span className='hash-span' id={idName}>
                    {/* for  space */}
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper;
