import { z as zod } from "zod";

const CategoryInput = zod.object({
    categoryName: zod.string(),
});

export type CategoryDetailInput = zod.infer<typeof CategoryInput>;
