import Image from 'next/image'
import styles from './logo.module.css'


function Logo() {
    return <div className={styles.logo}>
        <Image src="/logo-icon.webp" alt="Betwatch" width={30} height={30} />
        <span>Betwatch Guide</span>
    </div>;
}

export default Logo
