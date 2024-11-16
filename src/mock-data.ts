export type MoneyType = {
  amount: number;
  currency: string;
};

export type TableData = {
  id: string;
  date?: string;
  item: string;
  price: MoneyType;
  qty: number;
  additionalData: AdditionalData;
};

export type AdditionalData = {
  description: string;
  category: string;
  supplier: string;
  inStock: boolean;
  rating: number;
};

function generateISODate() {
  const now = new Date();
  const pastYear = new Date(now.setFullYear(now.getFullYear() - 1));
  const randomDate = new Date(
    pastYear.getTime() + Math.random() * (Date.now() - pastYear.getTime())
  );
  return randomDate.toISOString();
}

function getRandomPrice() {
  return parseFloat((Math.random() * (10000 - 1) + 1).toFixed(2));
}

function generateMockData(numRows: number): TableData[] {
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Potato",
    "Tomato",
    "Grapes",
    "Mango",
  ];

  const categories = ["Fruit", "Vegetable", "Dairy", "Meat", "Grain"];
  const suppliers = ["Supplier A", "Supplier B", "Supplier C", "Supplier D"];

  return Array.from({ length: numRows }, (_, index) => ({
    id: `Row ${index + 1}`,
    date: generateISODate(),
    item: items[Math.floor(Math.random() * items.length)] || "Unknown Item",
    qty: Math.floor(Math.random() * 10) + 1,
    price: { amount: getRandomPrice(), currency: "EUR" },
    additionalData: {
      description: `Description for ${
        items[Math.floor(Math.random() * items.length)]
      }`,
      category: categories[Math.floor(Math.random() * categories.length)],
      supplier: suppliers[Math.floor(Math.random() * suppliers.length)],
      inStock: Math.random() > 0.5 ? true : false,
      rating: parseFloat((Math.random() * 5).toFixed(1)),
    } as AdditionalData,
  }));
}

export const mockData = generateMockData(10);
