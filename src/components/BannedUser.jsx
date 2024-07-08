import Button from "../components/Button";

export default function ModalTable({ onCancel, onConfirm, isActive }) {
  return (
    <div className="flex justify-around p-4">
      <Button bg={"black"} onClick={onCancel} width={40}>
        {isActive ? `Cancel` : `Cancel`}
      </Button>
      <Button bg={"blue"} onClick={onConfirm} width={40}>
        {isActive ? `Confirm` : `Confirm`}
      </Button>
    </div>
  );
}
