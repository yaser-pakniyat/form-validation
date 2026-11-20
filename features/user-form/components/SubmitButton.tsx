import { useFormContext } from "react-hook-form";

export default function SubmitButton() {
  const {
    formState: { isSubmitting },
  } = useFormContext<FormData>();
  return (
    <button
      type="submit"
      className="cursor-pointer rounded-md bg-green-700 p-2 text-white disabled:cursor-wait disabled:bg-green-800"
      disabled={isSubmitting}
    >
      {isSubmitting ? <span>Waiting</span> : <span>Sign Up</span>}
    </button>
  );
}
