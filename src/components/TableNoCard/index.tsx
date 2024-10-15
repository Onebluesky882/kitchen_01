type TableNoProps = {
  tableNo: string;
  status: string;
  id: string;
  seat?: number;
};

const TableNoCard = ({ tableNo }: Pick<TableNoProps, "tableNo">) => {
  return <div>{tableNo}</div>;
};

export default TableNoCard;
