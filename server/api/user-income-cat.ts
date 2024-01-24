import { serverSupabaseClient } from "#supabase/server";
import type { Income } from "~~/types/database.types";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient<Income[]>(event);
  const { data, error } = await client
    .from("income_categories")
    .select("name,category_id");
  if (error) {
    throw createError({ statusMessage: error.message });
  }
  return data;
});
