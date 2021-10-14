import React  from "react"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { GoogleSesionAuth, GitHubAuthProvider } from "../../redux-global/action/Google.action";
import "./signUp.styles.scss"

const SignUp = ()=>{

    const [on, off] = React.useState(false);

  const type = t=>t?'text':'password';
  const checked = ()=>{if(on){off(false)} else {off(true)}}

    //register 
    const { register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    return (
        <div className='gen-continer'>
            <div className='box-sign'>
                    <h2>login or register</h2>
                <form className='log-in-form' onChange={handleSubmit(e=>console.log(e))}>
                    <input type='text' className='reg-in' {...register('name')} />
                    <input type={type(on)} className='reg-in' {...register('password')} />
                </form>
                <div className='sbmt-btn'>
                    <label>
                        <input onInput={checked} type='checkbox'/>
                        View password
                    </label>
                    <button className='submit-btn'>log in</button>
                </div>
                <div className='external-logs'>
                    <button onClick={()=>{dispatch(GoogleSesionAuth())}} id='google'></button>
                    <button id='facebook'></button>
                    <button onClick={()=>{dispatch(GitHubAuthProvider())}} id='gitHub'></button>
                </div>
            </div>
        </div>
    )
}

export default SignUp