import { z as zod } from "zod";

export const CategoryInput = zod.object({
    category: zod.string().min(3).max(255),
});

export type CategoryDetailInput = zod.infer<typeof CategoryInput>;
