import React from "react";

export default function About(props) {
let MyStyle = {
    color:props.mode==="dark"?"white":"#193860",
    backgroundColor: props.mode==="dark"?"#193860":"white",
 
}

    return (
        <>
            <div className="container my-4" style={{color:props.mode==="dark"?"white":"#193860"}}>
                <h1 className="my-2 mx-2">About Me</h1>
                <div className="accordion" id="accordionExample" style={{border:"1px solid white"}}>
                    <div className="card" style={MyStyle}>
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-left"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    style={MyStyle}
                                >
                                    <strong>Education</strong>
                                </button>
                            </h2>
                        </div>

                        <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div className="mx-3 my-3">
                                I did my schooling from Swami Vivekanand Public
                                School, Yamuna nagar.
                            </div>
                            <div className="mx-3 my-3">
                                Currently I am pursuing Bca from Mukand Lal
                                National College, yamuna nagar
                            </div>
                        </div>
                    </div>
                    <div className="card" style={MyStyle}>
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-left collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    style={MyStyle}
                                >
                                     <strong>Skills</strong>
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                        >
                            <div className="mx-3 my-3">
                                ReadtJs, ReduxJs, HTML, CSS, JavaScript, C, C++, Python(Basics)
                            </div>
                        </div>
                    </div>
                    <div className="card" style={MyStyle}>
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-link btn-block text-left collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                    style={MyStyle}
                                >
                                     <strong>Experience</strong>
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div className="mx-3 my-3">
                                No.
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
        </>
    );
}
