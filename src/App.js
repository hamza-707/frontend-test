import Header from "./components/Header";
import Table from "./components/Table";
import TableRow from "./components/TableRow";

const App = () => {
  return (
    <div>
      <Header />
      <div className="background">
        <TableRow>
          <Table
            title="table 1"
            items={["a", "b", "c", "d", "e"]}
            columns={2}
          />
          <Table
            title="table 2"
            items={["a", "b", "c", "d", "e", "f"]}
            columns={2}
          />
          <Table title="table 3" items={["a", "b", "c"]} columns={1} />
          <Table title="table 4" items={["a", "b", "c"]} columns={1} />
        </TableRow>
        <TableRow>
          <Table title="table 5" items={["a"]} columns={1} />
          <Table title="table 6" items={["a", "b", "c", "d"]} columns={3} />
        </TableRow>
      </div>
    </div>
  );
};

export default App;
