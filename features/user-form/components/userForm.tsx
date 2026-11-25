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
import styles from "./UserForm.module.css";

export default function UserForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  const onValid = async (data) => {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className={styles.wrapper}>
      <FormProvider {...methods}>
        <form
          className={styles.form}
          onSubmit={methods.handleSubmit(onValid, oninvalid)}
        >
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
