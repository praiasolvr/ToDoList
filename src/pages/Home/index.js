
import { useState } from 'react'
import './home.css'

import { Link } from 'react-router-dom'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'


import logops from '../../asserts/logops.png'
import logovr from '../../asserts/logovr.png'


export default function Home(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // navegar para /admin
        navigate('/admin', { replace: true } )
      })
      .catch(() => {
        console.log("ERRO AO FAZER O LOGIN")
      })

    }else{
      alert("Preencha todos os campos!")
    }


  }


  return(
    <div className="home-container">
      <h1>ToDoList</h1>
      <span>Praia Sol & Vereda</span>

      <div className='logo-container'>
        <img className='logo-ps' src={ logops } alt='logo-praia-sol'/>
        <img className='logo-vr' src={ logovr } alt='logo-vereda'/>
      </div>
        


      <form className="form" onSubmit={handleLogin}>
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

        <button type="submit" >Acessar</button>
      </form>

      <Link className="button-link" to="/register">
        Não possui uma conta? Cadastre-se
      </Link>

    </div>
  )
}