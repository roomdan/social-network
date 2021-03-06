import React  from "react"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { GoogleSesionAuth } from "../../redux-global/action/Google.action";
import { LogWhitMailandPassword } from "../../redux-global/action/login.whitMailPass";
import "./signUp.styles.scss"

const SignUp = ()=>{

    const [on, off] = React.useState(false);
    const [registers, setRegisters ] = React.useState( {
        email:'',
        password:''
    } )

  const type = t=>t?'text':'password';
  const checked = ()=>{if(on){off(false)} else {off(true)}}

    //register 
    const { register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    

    return (
        <div className='gen-continer'>
            <div className='box-sign'>
                    <h2>Inicie Sesion Con Google</h2>
                    <div style={{display:'none'}} className='warning'>ATTENTION: ONLY LOGIN WITH GOOGLE</div>
                <form style={{display:'none'}} className='log-in-form' onChange={handleSubmit(e=>setRegisters(e))}>
                    <input disabled type='text' className='reg-in' {...register('email')} />
                    <input disabled type={type(on)} className='reg-in' {...register('password')}/>
                </form>
                <div style={{display:'none'}} className='sbmt-btn'>
                    <label>
                        <input disabled onInput={checked} type='checkbox'/>
                        View password
                    </label>
                    <button onClick={()=>{dispatch(LogWhitMailandPassword(registers.email, registers.password))}} className='submit-btn'>log in</button>
                </div>
                <div className='external-logs'>
                    <button onClick={()=>{dispatch(GoogleSesionAuth())}} id='google'></button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
