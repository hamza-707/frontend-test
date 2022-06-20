import "./TableItems.css";

const TableItems = (props) => {
  const items = props.items;
  const classes = "table-items-" + props.columns
  return (
    <div className={classes}>
      {items.map((item) => {
        return (
          <div className="table-item">
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TableItems;
