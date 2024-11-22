import "./App.css";
import { useTable } from "@/components/react-hook-form/useTable";
import { mockData, TableData } from "./mock-data";
import { formatMoney } from "@/components/react-hook-form/format-functions";
/*
type SubTableProps = {
  data: AdditionalData;
};

const Subtable = ({ data }: SubTableProps) => {
  const { Table, Column } = useTable<AdditionalData>();

  return (
    <Table data={[data]}>
      <Column accessor="description" />
      <Column accessor="category" />
      <Column accessor="supplier" />
      <Column accessor="inStock" format="boolean" />
      <Column accessor="rating" alignment="right" />
    </Table>
  );
};
*/
function App() {
  const { Table, Column } = useTable<TableData>();

  return (
    <Table
      data={mockData}
      isLoading={false}
      caption={{
        value: "Example table rendering with chadcn/ui table elements",
      }}
    >
      {/* <Column
        expandable
        defaultExpanded={({ id }) => ["Row 2", "Row 4"].includes(id)}
        colWidth={5}
      >
        {({ additionalData }) => <Subtable data={additionalData} />}
      </Column> */}
      <Column accessor="id" />
      <Column accessor="date" format="dateTime" />
      <Column accessor="item" />
      <Column accessor="qty" alignment="center" />
      <Column
        accessor="price"
        format="money"
        alignment="right"
        footer={{ value: "Total:", colSpan: 5, alignment: "right" }}
        colWidth={10}
      />
      <Column
        header="Row total"
        alignment="right"
        colWidth={10}
        footer="123 456,56 €"
      >
        {({ qty, price }) =>
          formatMoney({
            amount: qty * price.amount,
            currency: price.currency,
          })
        }
      </Column>
    </Table>
  );
}

export default App;
