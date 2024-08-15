import "./Cell.css";

type CellProps = {
  value?: string;
  onChange: (value: string, row: number, col: number) => void;
  row: number;
  col: number;
};

const Cell = (props: CellProps) => {
  const { value, onChange, row, col } = props;
  return (
    <input
      className="cell"
      type="numeric"
      maxLength={1}
      value={value ?? ""}
      onChange={(e) => {
        if (!isNaN(parseInt(e.target.value)) || e.target.value === "") {
          onChange(e.target.value === "" ? "" : e.target.value, row, col);
        }
      }}
    />
  );
};

export default Cell;
