import { db } from "@/db";
import { sql } from "drizzle-orm";
import { views } from "./schema";

export async function getViewCount() {
  return await db.select({ slug: views.slug, count: views.count }).from(views);
}

export async function getBlogViews() {
  let count = await db.execute(sql`
    SELECT count
    FROM views
  `);

  return count.rows.reduce((acc, curr: any) => acc + Number(curr.count), 0);
}
