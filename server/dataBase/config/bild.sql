BEGIN;

DROP TABLE IF EXISTS products, catogery CASCADE;

CREATE TABLE catogery(
    id SERIAL PRIMARY KEY,
    catogery VARCHAR(50) NOT NULL
);

CREATE TABLE products (
id SERIAL PRIMARY KEY,
title VARCHAR(200) NOT NULL,
description TEXT,
img TEXT NOT NULL,
price INTEGER,
catogery_id INTEGER NOT NULL REFERENCES catogery(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO catogery(catogery) VALUES ('pizza');

INSERT INTO products (title, description, img, price, catogery_id) VALUES ('pizza', 'pizza pizza pizza pizza pizza', 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcHbxCjB7FY6Rttw1VZFdh0gIZmm4MLLjfmD0dhA11saxBKG_D49VVkmlvz3sE71-b', 20,1);
INSERT INTO products (title, description, img, price, catogery_id) VALUES ('pizza2', 'pizza2 pizza2 pizza2 pizza2 pizza2', 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcHbxCjB7FY6Rttw1VZFdh0gIZmm4MLLjfmD0dhA11saxBKG_D49VVkmlvz3sE71-b', 20,1);

COMMIT;
