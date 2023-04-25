import {useState , useEffect} from 'react'

export const useLocalStorage = (key , state) => {
   const item = window.localStorage.getItem(key)
   const [value,setvalue] = useState(item || state)

   useEffect(() => {
      window.localStorage.setItem(key , value)
   }, [value , key])
   return [value , setvalue]
}



