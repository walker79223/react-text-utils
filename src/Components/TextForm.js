import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        console.log("handle invoked !");
        setText(event.target.value)
    }
    const upCase = () => {
        setText(text.toUpperCase())
    }
    const lowCase = () => {
        setText(text.toLowerCase())
    }
    const clearText = () => {
        setText("")
        props.showAlert('success', 'Copied to clipboard !!')
    }
    const copyToClip = () => {
        navigator.clipboard.writeText(text);
    }
    const removeSpace = () => {

        setText(text.replace(/\s+/g, ' ').trim())
    }

    return (
        <>
            <div className='container my-3'>
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === 'dark' ? '#212529' : props.mode === 'light',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="12"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={upCase}>Upper case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={lowCase}>Lower case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={removeSpace}>Remove Exrta spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={copyToClip}>Copy to Clipboard</button>
            </div>
            <div className="container my-3">
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h3>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/).filter((elem) => elem.length !== 0).length} words &amp; {text.trim().length} characters</p>
                <p id='previewText' className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    {text.length > 0 ? text : "Enter something in text box to preview it !!"}
                </p>
            </div>
        </>
    )
}
