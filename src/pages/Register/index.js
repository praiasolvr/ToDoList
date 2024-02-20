import { useState } from 'react'

import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


import logops from '../../asserts/logops.png'
import logovr from '../../asserts/logovr.png'

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', { replace: true })
      })
      .catch((e) => {
        // if (e === "FirebaseError: Firebase: Error (auth/email-already-in-use)."){
        //   alert('nunca vai passar aqui')
        // }
        console.log("ERRO AO FAZER O CADASTRO " + e)
      })
    }else{
      alert("Preencha todos os campos!")
    }


  }


  return(
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

      <div className='logo-container'>
        <img className='logo-ps' src={ logops } alt='logo-praia-sol'/>
        <img className='logo-vr' src={ logovr } alt='logo-vereda'/>
      </div>

      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />

        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value) }
        />

        <button type="submit" >Cadastrar</button>
      </form>

      <Link className="button-link" to="/">
        Já possui uma conta? Faça login!
      </Link>

    </div>
  )
}