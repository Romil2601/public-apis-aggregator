-- =====================================================
-- SAFE SEED SCRIPT FOR PUBLIC APIs AGGREGATOR
-- =====================================================

-- =========================
-- CATEGORIES (NO DUPLICATES)
-- =========================
INSERT INTO categories (name)
SELECT 'Weather' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Weather');

INSERT INTO categories (name)
SELECT 'Finance' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Finance');

INSERT INTO categories (name)
SELECT 'Games' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Games');

INSERT INTO categories (name)
SELECT 'Open Data' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Open Data');

INSERT INTO categories (name)
SELECT 'AI' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'AI');

INSERT INTO categories (name)
SELECT 'Music' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Music');

-- =========================
-- PUBLIC APIs (NO DUPLICATES)
-- =========================

-- Weather
INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'OpenWeather API',
  'Weather forecasts and real-time weather data',
  c.id,
  'API Key',
  1,
  'https://openweathermap.org/api'
FROM categories c
WHERE c.name = 'Weather'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'OpenWeather API');

-- Finance
INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'CoinGecko API',
  'Cryptocurrency prices and market data',
  c.id,
  'None',
  1,
  'https://www.coingecko.com/en/api'
FROM categories c
WHERE c.name = 'Finance'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'CoinGecko API');

INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'Alpha Vantage API',
  'Stock market data and technical indicators',
  c.id,
  'API Key',
  1,
  'https://www.alphavantage.co/documentation/'
FROM categories c
WHERE c.name = 'Finance'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'Alpha Vantage API');

-- Games
INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'RAWG Video Games API',
  'Video game database and discovery platform',
  c.id,
  'API Key',
  1,
  'https://rawg.io/apidocs'
FROM categories c
WHERE c.name = 'Games'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'RAWG Video Games API');

INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'FreeToGame API',
  'Free-to-play games database',
  c.id,
  'None',
  1,
  'https://www.freetogame.com/api-doc'
FROM categories c
WHERE c.name = 'Games'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'FreeToGame API');

-- Open Data
INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'NASA Open APIs',
  'Space and astronomy data from NASA',
  c.id,
  'API Key',
  1,
  'https://api.nasa.gov/'
FROM categories c
WHERE c.name = 'Open Data'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'NASA Open APIs');

-- AI
INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'OpenAI API',
  'AI models for text, images, and code',
  c.id,
  'API Key',
  1,
  'https://platform.openai.com/docs'
FROM categories c
WHERE c.name = 'AI'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'OpenAI API');

INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'Hugging Face API',
  'Machine learning models for NLP and vision',
  c.id,
  'API Key',
  1,
  'https://huggingface.co/docs/api-inference'
FROM categories c
WHERE c.name = 'AI'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'Hugging Face API');

-- Music
INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'Spotify Web API',
  'Music metadata and recommendations',
  c.id,
  'OAuth',
  1,
  'https://developer.spotify.com/documentation/web-api'
FROM categories c
WHERE c.name = 'Music'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'Spotify Web API');

INSERT INTO apis (name, description, category_id, auth, https, doc_url)
SELECT
  'Last.fm API',
  'Music charts and artist data',
  c.id,
  'API Key',
  1,
  'https://www.last.fm/api'
FROM categories c
WHERE c.name = 'Music'
AND NOT EXISTS (SELECT 1 FROM apis WHERE name = 'Last.fm API');

-- =========================
-- OPTIONAL (RUN ONCE)
-- Prevent future duplicates
-- =========================
ALTER TABLE categories ADD CONSTRAINT unique_category_name UNIQUE (name);
ALTER TABLE apis ADD CONSTRAINT unique_api_name UNIQUE (name);

-- =========================
-- VERIFY DATA
-- =========================
-- SELECT a.name, c.name AS category
-- FROM apis a
-- JOIN categories c ON a.category_id = c.id
-- ORDER BY c.name, a.name;