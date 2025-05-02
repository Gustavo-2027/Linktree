import React, { FormEvent, useEffect, useState } from 'react'
import Header from '../../components/header/Index'
import Input from '../../components/social/input/Index'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { fireStore } from '../../services/firebaseConnection'

const Redes = () => {
  
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")

  useEffect(() => {
    const loadLinks = () => {
      const docRef = doc(fireStore, "social", "link")
      getDoc(docRef)
      .then((snap) => {
        if(snap.data() !== undefined) {
          setFacebook(snap.data()?.facebook)
          setInstagram(snap.data()?.instagram)
          setYoutube(snap.data()?.youtube)
        }
      })
    }

    loadLinks()
  },[])

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()

    setDoc(doc(fireStore, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    }).then(() => {
      console.log("Cadastrado com sucesso")
    }).catch((err) => {
      alert("Erro ao salvar " + err)
    })
  }

  return (
    <div className="w-full h-dvh bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-800 text-white flex flex-col items-center text-center">
      <Header/>
      <h1 className='text-2xl font-bold mt-9 mb-4'>Minhas Redes Sociais</h1>

      <form className='flex flex-col max-w-xl w-full' onSubmit={handleRegister}>
        <label htmlFor="iface" className='text-white font-medium mt-2 mb-2'>
          Link do Facebook
        </label>
          <Input placeholder='Digite a url do Facebook' type='url' value={facebook} onChange={(e => setFacebook(e.target.value))} id='iface'/>

          <label htmlFor="insta" className='text-white font-medium mt-2 mb-2'>
          Link do Instagram
        </label>
          <Input placeholder='Digite a url do Instagram' type='url' value={instagram} onChange={(e => setInstagram(e.target.value))} id='insta'/>

          <label htmlFor="iYou" className='text-white font-medium mt-2 mb-2'>
          Link do Youtube
        </label>
          <Input placeholder='Digite a url do Youtube' type='url' value={youtube} onChange={(e => setYoutube(e.target.value))} id='iYou'/>

          <button type='submit' className='text-white font-bold bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 cursor-pointer duration-700 hover:opacity-70'>Salvar Links</button>
      </form>
    </div>
  )
}

export default Redes
