import {useState} from 'react'
export default function ImagesPage(){
  const [prompt,setPrompt] = useState('')
  const [url,setUrl] = useState(null)
  const generate = async ()=>{
    const res = await fetch('http://localhost:4000/api/generate-image',{
      method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({prompt})
    })
    const data = await res.json()
    setUrl(data.url)
  }
  return (<main style={{padding:24,fontFamily:'Arial'}}>
    <h2>Generador de imágenes</h2>
    <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Describe tu imagen"/>
    <button onClick={generate}>Generar</button>
    {url && <div><img src={url} width="400"/></div>}
  </main>)
}
