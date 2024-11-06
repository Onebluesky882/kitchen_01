export type Table = {
  tableNo: "A1" | "A2" | "A3" | "A4" | "A5" | "B1" | "B2" | "B3" | "B4";
  status: "AVAILABLE" | "OCCUPIED" | "RESERVED" | "CLEANING";
  seat?: number;
};

// call table from order
