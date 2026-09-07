-- Reseñas de la web (antes en Supabase). Idempotente: se puede ejecutar varias veces.
-- Aplicar:  npx wrangler d1 execute djramos --local --file=schema.sql
--           npx wrangler d1 execute djramos --remote --file=schema.sql
CREATE TABLE IF NOT EXISTS reviews (
  id         TEXT PRIMARY KEY,
  author     TEXT NOT NULL,
  event      TEXT NOT NULL,
  text       TEXT NOT NULL,
  ip_address TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS reviews_created ON reviews(created_at);
CREATE INDEX IF NOT EXISTS reviews_ip_created ON reviews(ip_address, created_at);
