import "./TableTitle.css"

const TableTitle = (props) => {
    const classes = "table-title table-columns__" + props.columns
    return <div className={classes}>
        <h3>{props.title}</h3>
    </div>
}

export default TableTitle;