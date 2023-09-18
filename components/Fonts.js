// importar fontes
// ref: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { Nunito, Open_Sans  } from 'next/font/google' // con isto podemos acceder a calquera fonte de google

export const nunito = Nunito({ // exportar a constante para podela usar onde queiramos
  subsets: ['latin'], // moi indicado limitar o subset
  weight: ['200', '400', '700'],
  variable: '--font-nunito' // declarar a fonte como variable para poder usala directamente na folla de estilos
})

// declara tantas fontes como precises
export const openSans = Open_Sans({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-opensans'
})

