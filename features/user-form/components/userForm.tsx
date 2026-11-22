"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormSchema } from "../schemas/userForm.schema";
import type { FormData } from "../types/userForm.types";
import {
  FirstNameField,
  LastNameField,
  PhoneField,
  GenderField,
  Agreement,
  SubmitButton,
} from "./index";
import { defaultValues } from "../constants/defaultValues";

export default function UserForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <FirstNameField />
          <LastNameField />
          <PhoneField />
          <GenderField />
          <Agreement />
          <SubmitButton />
        </form>
      </FormProvider>
    </div>
  );
}
