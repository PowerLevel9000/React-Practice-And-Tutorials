import React from "react";

const hello = () => {
//  with jsx

    // return(
    //     <div className = "hello", id="hello">
    //         <h1>Hello babe</h1>
    //     </div>
    // )

// without jsx
    return React.createElement(
        'div',
        {id:'hello', className: 'hello'},
        React.createElement(
            'h1', 
            null, 
            'hello babe'
            )
        )
}

export default hello;

// differences in HTML and JSX

// class => className;
// for => htmlFor;
// camelCase property naming convention
//    onclick => onClick;
//    tabindex => tabIndex;