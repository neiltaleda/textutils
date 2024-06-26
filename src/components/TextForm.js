// import React, {useState} from 'react'
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';




// console.log(useState('Enter text here'))

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick = () =>{
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase!","success")
    }
    const handleClearClick = () =>{
         let newText = "";
         setText(newText);
         props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event) =>{
         setText(event.target.value);
    }

    const handleCopy = ()=>{
     console.log("I am copy");
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to Clipboard","success")
    }

    const handleExtraSpaces =()=>{
     let newtext = text.split(/[ ]+/);
     setText(newtext.join(" "));
     props.showAlert("Extra spaces removed","success")
    }


    return (
         <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         {/* Double curly braces since I am puttingan object */}
         </div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
         <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h2>Your text summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} minutes taken to read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
