import { useFormContext } from "react-hook-form";
import type { FormData } from "../types/userForm.types";

export default function LastNameField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...register("lastName")}
        placeholder="Enter Your Last Name"
      />
      {errors.lastName?.message && <span>{errors.lastName.message}</span>}
    </div>
  );
}
