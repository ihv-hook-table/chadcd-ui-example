import { Button } from "./button";

type Props = {
  id: string;
  onClose?: () => void;
};

export const Confirm = ({ id, onClose }: Props) => {
  return (
    <div className="border rounded-sm bg-white p-4 flex flex-col items-center">
      <div className="mb-5">{`Are you sure you want to delete ${id}?`}</div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={onClose}>
          Remove
        </Button>
      </div>
    </div>
  );
};
