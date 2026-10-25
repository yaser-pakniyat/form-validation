import { useFormContext } from "react-hook-form";
import { FormData } from "../types/userForm.types";

export default function PhoneField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div>
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        {...register("phone")}
        placeholder="0xxxxxxxxxx"
      />
    </div>
  );
}
