import { TableRecord, useTable as useHookTable } from "@ihv/react-hook-table";
import {
  formatBoolean,
  formatDateFromISOString,
  formatDateTimeFromISOString,
  formatMoney,
  translate,
} from "./format-functions";
import { MoneyType } from "@/mock-data";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type FormatProps = {
  money: (money: MoneyType) => string;
  date: (date: string) => string;
  dateTime: (dateTime: string) => string;
  boolean: (value: boolean) => string;
};

export const useTable = <T extends TableRecord = TableRecord>() => {
  const components = useHookTable<T, FormatProps>({
    formatFunctions: {
      money: formatMoney,
      date: formatDateFromISOString,
      dateTime: formatDateTimeFromISOString,
      boolean: formatBoolean,
    },
    translate,
    components: {
      Table,
      TableHeader,
      TableHead,
      TableBody,
      TableRow,
      TableData: TableCell,
      TableFooter,
    },
  });

  return components;
};
