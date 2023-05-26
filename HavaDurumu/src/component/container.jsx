import React, { useRef, useState } from 'react'
import moduleName from './container.css'
import axios from 'axios'

export default function Container() {
  const ref = useRef()
  const [sehir,setSehir] = useState("")
  const [hava,setHava] = useState("")
  const [sicaklik,setSicaklik] = useState("")
  const [min_sicaklik,setmin_Sicaklik] = useState("")
  const [max_sicaklik,setmax_Sicaklik] = useState("")
  const deneme = ()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ref.current.value}&appid=bde08fb59420673f92f354fc2039d962&lang=tr&units=metric`).then((response) => {
      setSehir("Şehir: "+response.data.name);
      setHava("Hava: "+response.data.weather[0].description);
      setSicaklik("Sıcaklık: "+response.data.main.temp+" *C");
      setmax_Sicaklik("En Yüksek Sıcaklık: "+response.data.main.temp_max+" *C");
      setmin_Sicaklik("En Düşük Sıcaklık: "+response.data.main.temp_min+" *C");
    }).catch(()=>{
      setSehir("Yanlış Şehir Girdiniz")
      setHava("Yada")
      setSicaklik("Boş Bıraktınız")
      setmax_Sicaklik("Tekrar Deneyiniz")
      setmin_Sicaklik("")
    })
    

  }
  const press = (e)=>{
      if(e.keyCode=="13"){
        deneme()
      }
  }
  
  return (
    <div>
       
        <form action="#" method="get">
          <input placeholder='Şehir Giriniz' ref={ref} required onKeyDown={press} type="text"/>
          <button onClick={deneme}  type="reset">Ara</button>
        </form>
        <div className='bilgi'> 
        <h1>{sehir}</h1>
        <h2>{hava}</h2>
        <h3>{sicaklik}</h3>
        <h3>{min_sicaklik}</h3>
        <h3>{max_sicaklik}</h3>
        </div>

    </div>
  )
}
