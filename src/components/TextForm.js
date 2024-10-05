import React,{useState}from 'react'
export default function TextForm(props) {
const handleUpclick=()=>{
  // console.log("clicked "+ text); 
  let newText=text.toUpperCase();
  setText(newText)
}
const handleOnChange=(event)=>{
    // console.log("handle on change");
  setText(event.target.value);
  }
  // setText()
  const[text,setText]=useState("Enter text here");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
<div class="mb-3">
  {/* <label for="mybox" class="form-label">Example textarea</label> */}
  <textarea class="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
</div>
<butto className="btn btn-primary" onClick={handleUpclick}>Conver to upper case</butto>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} words</p>
      <p>{0.008*(text.split(" ").length)} Minutes are require</p>
    </div>
    </>
  )
}
