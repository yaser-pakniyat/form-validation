import { useFormContext } from "react-hook-form";
import type { FormData } from "../types/userForm.types";
import styles from "./UserForm.module.css";

export default function LastNameField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="lastName">Last Name</label>
      <input
        className={styles.input}
        id="lastName"
        type="text"
        {...register("lastName")}
        placeholder="Enter Your Last Name"
        disabled={isSubmitting}
      />
      {errors.lastName?.message && (
        <span className={styles.error}>{errors.lastName.message}</span>
      )}
    </div>
  );
}
