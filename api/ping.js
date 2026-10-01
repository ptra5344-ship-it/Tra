import { Redis } from "@upstash/redis";
const r = Redis.fromEnv();
export default async function handler(req, res) {
  const id = req.body && req.body.id;
  if (!id) return res.status(400).end();
  await r.zadd("online", { score: Date.now(), member: id });
  await r.sadd("all_users", id);
  res.json({ ok: true });
}
