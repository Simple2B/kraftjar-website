import { z } from "zod";

export const SearchSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" }),
});

export type TypeSearchSchema = z.infer<typeof SearchSchema>;
