import LoginBtn from '../../buttons/LoginBtn'
import styles from './Login.module.css'
import { auth, provider } from "../../Firebase"
import { signInWithPopup } from "firebase/auth"
import { useDispatch } from "react-redux"
import { setUser } from "../../slices/userSlice"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.png'




const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                }))
                navigate('/main')
            })
            .catch(console.log)
    }
    return (
        <>
            <div className={styles.text}>
                <h1>CoinCap by Rtmklc</h1>
            </div>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div className={styles.btn}>
                    <LoginBtn handleClick={handleClick} />
                </div>
            </div>
        </>
    )
}

export default Login;
