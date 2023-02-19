import React from "react"

// import todosData from "./database"
// const Inputs = (props) => {
//     return (
// <div className="to-do">
//     <input type="checkbox" checked={props.item.completed}/>
//     <p>{props.item.text}</p>
// </div>

//     )
// }

class Inputs extends React.Component {
    render(props) {
        return (
            <div className="to-do">
                <input type="checkbox" checked={props.item.completed} />
                <p>{props.item.text}</p>
            </div>
        )
    }
}

export default Inputs