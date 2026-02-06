CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    is_admin INTEGER DEFAULT 0
);

CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE apis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    category_id INTEGER,
    auth TEXT,
    https INTEGER,
    doc_url TEXT
);

CREATE TABLE favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    api_id INTEGER
);

CREATE TABLE ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    api_id INTEGER,
    rating INTEGER
);

CREATE TABLE views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    api_id INTEGER,
    viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);