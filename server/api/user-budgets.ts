import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data, error } = await client
    .from("incomes")
    .select("category_id,comment,year,month,base_amount");
  if (error) {
    throw createError({ statusMessage: error.message });
  }
  return data;
});
