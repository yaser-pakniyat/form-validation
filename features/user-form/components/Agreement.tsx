import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { FormData } from "../types/userForm.types";

export default function Agreement() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div>
      <div>
        <label htmlFor="agree">
          I agree <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>
        </label>
        <input id="agree" type="checkbox" />
      </div>
    </div>
  );
}
