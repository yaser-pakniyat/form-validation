import { useFormContext } from "react-hook-form";
import { FormData } from "../types/userForm.types";
import styles from "./UserForm.module.css";

export default function PhoneField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        className={styles.input}
        type="tel"
        {...register("phone")}
        placeholder="0xxxxxxxxxx"
        disabled={isSubmitting}
      />
      {errors.phone?.message && (
        <span className={styles.error}>{errors.phone.message}</span>
      )}
    </div>
  );
}
