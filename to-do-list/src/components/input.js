// import todosData from "./database"
const Inputs = (props) => {
    return (
        <div className="to-do">
            <input onChange = {()=>props.handleChange(props.item.id)} type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>

    )
}


export default Inputs