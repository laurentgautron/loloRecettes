import { useQuery } from "@tanstack/react-query";
import { getMealCategories } from "./services/mealDBApi";

export const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: getMealCategories
});