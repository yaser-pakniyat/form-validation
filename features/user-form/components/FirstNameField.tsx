import { useFormContext } from "react-hook-form";
import type { FormData } from "../types/userForm.types";

export default function FirstNameField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" placeholder="Enter Your First Name" />
    </div>
  );
}
