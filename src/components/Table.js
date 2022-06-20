import "./Table.css";
import TableItems from "./TableItems";
import TableTitle from "./TableTitle";

const Table = (props) => {
  const classes = "table table-width-" + props.columns;
  return (
    <div className={classes}>
      <TableTitle title={props.title} />
      <TableItems items={props.items} columns={props.columns} />
    </div>
  );
};

export default Table;
