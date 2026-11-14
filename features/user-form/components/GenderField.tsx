import { useFormContext } from "react-hook-form";
import { FormData } from "../types/userForm.types";
import styles from "./UserForm.module.css";

export default function GenderField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div className={styles.inputWrapper}>
      <fieldset className="flex justify-evenly rounded-xl border border-gray-400 pb-2 focus-within:border-sky-400">
        {/* male */}
        <legend>Gender</legend>
        <label htmlFor="male">
          <input
            id="male"
            type="radio"
            value="male"
            {...register("gender")}
            className="mr-1"
            disabled={isSubmitting}
          />
          Male
        </label>

        {/* female */}
        <label htmlFor="female">
          <input
            id="female"
            type="radio"
            value="female"
            {...register("gender")}
            className="mr-1"
            disabled={isSubmitting}
          />
          Female
        </label>
      </fieldset>
      <div>
        {errors.gender?.message && (
          <span className={styles.error}>{errors.gender.message}</span>
        )}
      </div>
    </div>
  );
}
