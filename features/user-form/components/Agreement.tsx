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
      <div className="flex gap-x-1">
        <label htmlFor="agree" className="text-xs">
          I agree{" "}
          <Link className="text-blue-600" href="/terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-blue-600" href="/privacy">
            Privacy Policy
          </Link>
        </label>
        <input
          id="agree"
          type="checkbox"
          {...register("agree")}
          disabled={isSubmitting}
        />
      </div>
      {errors.agree?.message && (
        <span className="error -mt-6">{errors.agree.message}</span>
      )}
    </div>
  );
}
