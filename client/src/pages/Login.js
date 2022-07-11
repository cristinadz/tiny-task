import React from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function Login({onLogin}) {
  return (
    <div>
        <LoginForm />
        <SignupForm onLogin = {onLogin} />
    </div>
  )
}

export default Login