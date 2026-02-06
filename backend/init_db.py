import sqlite3

with open("sql/seed.sql") as f:
    conn.executescript(f.read())