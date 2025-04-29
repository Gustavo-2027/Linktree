import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input type="text"
    className='border-0 rounded-md outline-0 bg-white px-2 text-black mb-3'
    {...props}/>
  )
}

export default Input
