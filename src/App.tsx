import "./App.css";
import { useTable } from "@/components/react-hook-form/useTable";
import { AdditionalData, mockData, TableData } from "./mock-data";
import { formatMoney } from "@/components/react-hook-form/format-functions";
import { Confirm } from "./components/ui/confirm";

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
      <Column
        accessor="inStock"
        format="boolean"
        alignment="center"
        header="In stock"
      />
      <Column accessor="rating" alignment="right" />
    </Table>
  );
};

function App() {
  const { Table, Column } = useTable<TableData>();

  return (
    <div className="rounded-md border">
      <Table
        data={mockData}
        isLoading={false}
        caption={{
          value: "Example table rendering with chadcn/ui table elements",
          alignment: "top-left",
        }}
      >
        <Column
          expandable
          defaultExpanded={({ id }) => ["Row 2", "Row 4"].includes(id)}
          colWidth={1}
        >
          {({ additionalData }) => <Subtable data={additionalData} />}
        </Column>
        <Column accessor="id" />
        <Column accessor="date" format="dateTime" />
        <Column accessor="item" />
        <Column accessor="qty" alignment="center" />
        <Column
          accessor="price"
          format="money"
          alignment="right"
          footer={{ value: "Total:", colSpan: 6, alignment: "right" }}
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
        <Column expandable="delete" colWidth={1}>
          {({ id }, { closeSubrow }) => (
            <Confirm id={id} onClose={closeSubrow} />
          )}
        </Column>
      </Table>
    </div>
  );
}

export default App;
