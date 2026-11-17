import { useFormContext } from "react-hook-form";

export default function SubmitButton() {
  const {
    formState: { isSubmitting },
  } = useFormContext<FormData>();
  return (
    <button type="submit">
      Sign Up
    </button>
  );
}
