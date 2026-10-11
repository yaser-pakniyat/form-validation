"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema } from "../schemas/userForm.schema";
import type { FormData } from "../types/userForm.types";
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

    </div>
  );
}
