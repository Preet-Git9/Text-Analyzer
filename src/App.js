import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForms";
import Alerts from "./components/Alerts";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggle = () => {
        
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "rgb(5, 37, 79)";
            showAlert("Dark mode is Enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode is Enabled", "success");
        }
    };

    return (
        <>
            {/*  This is called props as we make components and use only import
            and name from directory to clean code and efficient code -> */}
            <Router>
            <Navbar
                tittle="Text Analyzer"
                about="About me"
                mode={mode}
                togglemode={toggle}
            />
            <Alerts alert={alert} />
            {/* sometimes the path will be go to partial location i mean to say that it goes to partial matching of path so that we can use the exact */}
            <div className="container my-5 ">

                <Routes>
                    <Route exact path="/about" element = {<About mode={mode}/>}>
                        
                    </Route>
                    <Route exact path="/" element= {<TextForm
                            head="Enter the text to analyze"
                            mode={mode}
                            showAlert={showAlert}
                        />}>
                        
                    </Route>
                </Routes>
            </div>
            </Router>
        </>
    );
}

export default App;
