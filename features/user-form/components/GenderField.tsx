import { useFormContext } from "react-hook-form";
import { FormData } from "../types/userForm.types";

export default function GenderField() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<FormData>();
  return (
    <div>
      <fieldset>
        {/* male */}
        <legend>Gender</legend>
        <label htmlFor="male">
          <input id="male" type="radio" value="male" />
          Male
        </label>

        {/* female */}
        <label htmlFor="female">
          <input id="female" type="radio" value="female" />
          Female
        </label>
      </fieldset>
    </div>
  );
}
