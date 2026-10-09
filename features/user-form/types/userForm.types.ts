import z from "zod";
import { FormSchema } from "../schemas/userForm.schema";

export type FormData = z.infer<typeof FormSchema>;