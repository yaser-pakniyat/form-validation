import z from "zod";

const nameSchema = z
  .string()
  .trim()
  .toLowerCase()
  .nonempty("This field is required")
  .min(2, "Please enter a valid value")
  .max(15, "Must be 15 characters or fewer")
  .regex(/^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/, {
    message: "Only English letters are allowed",
  });

export const FormSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  gender: z.enum(["male", "female"], { message: "Please select a gender" }),
  phone: z.string().regex(/^0\d{10}$/, "Please enter a valid phone number"),
  agree: z.literal(true, {
    message: "You must accept the terms and conditions",
  }),
});
