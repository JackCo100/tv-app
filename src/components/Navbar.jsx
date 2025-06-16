import styles from './Navbar.module.css'
function NavBar(){
    return(
        <div className={styles.navbar}>
            <a href="/" className={styles.navbar.link}>TV Lovers</a>
        </div>
)}
export default NavBar;