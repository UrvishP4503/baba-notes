import { z as zod } from "zod";

const userInputSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    name: zod.optional(zod.string().min(3)),
});

const userEditSchema = zod.object({
    email: zod.optional(zod.string().email()),
    name: zod.optional(zod.string().min(3)),
    password: zod.optional(zod.string().min(6)),
});

export type UserEditInput = zod.infer<typeof userEditSchema>;
export type UserDetailInput = zod.infer<typeof userInputSchema>;
