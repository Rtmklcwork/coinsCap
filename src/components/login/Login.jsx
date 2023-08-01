import { auth, provider } from "../../Firebase"
import { signInWithPopup } from "firebase/auth"
import LoginBtn from '../../buttons/LoginBtn'
import { useDispatch } from "react-redux"
import { setUser } from "../../slices/userSlice"
import { useNavigate } from "react-router-dom"

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

        <LoginBtn handleClick={handleClick}/>

    )
}

export default Login;
