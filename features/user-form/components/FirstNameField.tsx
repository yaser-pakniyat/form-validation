import { useFormContext } from "react-hook-form";
import type { FormData } from "../types/userForm.types";
import styles from "./UserForm.module.css";

export default function FirstNameField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="firstName">First Name</label>
      <input
        className={styles.input}
        id="firstName"
        type="text"
        {...register("firstName")}
        placeholder="Enter Your First Name"
        disabled={isSubmitting}
      />
      {errors.firstName?.message && (
        <span className={styles.error}>{errors.firstName.message}</span>
      )}
    </div>
  );
}
