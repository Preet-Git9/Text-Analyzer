import React, { useState } from "react";

export default function TextForm(props) {
    const [text, settext] = useState("");

    const handelUpChange = () => {
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Upper case is accured", "success");
    };

    const handelLwChange = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Lower case is accured", "success");
    };

    const handelClearText = () => {
        settext("");
        props.showAlert("Your Text is cleared", "success");
    };

    const handelFLC = () => {
        let newText = text
            .toLowerCase()
            .split(/\s+/g)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "); //This expression uppercase the every first character of every word and change the whole characters of same word to small letter NOTE: This expressoin is more efficient
        // let newText =   text.replace(/\b\w/g, (char) => char.toUpperCase()) // this expression capitalize the first character of every word and ramaining characters are same as it is even capital or lower
        settext(newText);
        props.showAlert("First letter is Capitalized", "success");
    };

    const handleExSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    };

    const handleCopyText = () => {
        
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied", "success");
    };

    const handleOnChange = (event) => {
        settext(event.target.value);
    };


    return (
        <>
            <div className="form-group">
                <h1
                    className={`text-${
                        props.mode === "light" ? "dark" : "light"
                    }`}
                >
                    {props.head}
                </h1>
                <textarea
                    type="text"
                    className={`form-control text-${
                        props.mode === "light" ? "dark" : "light"
                    }`}
                    value={text}
                    onChange={handleOnChange}
                    id="box"
                    rows="8"
                    placeholder="Type text here..."
                    style={{
                        backgroundColor:
                            props.mode === "dark" ? "rgb(28, 63, 108)" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                    }}
                />
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelUpChange}>
                Convert to Upper case
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelLwChange}>
                Convert to Lower case
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelFLC}>
                First letter cap
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExSpaces}>
                Remove Extra Spaces
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
                Copy Text
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelClearText}>
                Clear Text
            </button>
            <div className="container my-4">
                <h1
                    className={`text-${
                        props.mode === "light" ? "black" : "light"
                    }`}
                >
                    Your text summary
                </h1>
                <p
                    className={`text-${
                        props.mode === "light" ? "black" : "light"
                    }`}
                >
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} size
                    
                </p>
                <p
                    className={`text-${
                        props.mode === "light" ? "black" : "light"
                    }`}
                >
                    {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read
                </p>
                <h3
                    className={`text-${
                        props.mode === "light" ? "black" : "light"
                    }`}
                >
                    Preview
                </h3>
                <p
                    className={`text-${
                        props.mode === "light" ? "black" : "light"
                    }`}
                >
                    {text === "" ? "Nothing to preview" : text}
                </p>
            </div>
        </>
    );
}
