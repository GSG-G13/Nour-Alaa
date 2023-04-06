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

INSERT INTO catogery(catogery) VALUES ('food');
INSERT INTO catogery(catogery) VALUES ('drink');
INSERT INTO catogery(catogery) VALUES ('apprtizer');
INSERT INTO catogery(catogery) VALUES ('dessert');

INSERT INTO products (title, description, img, price, catogery_id) VALUES ('Healthy food', '', 'https://i.pinimg.com/564x/19/42/39/1942391edeffc0313b4f023f6430e5c6.jpg', 20,1);
INSERT INTO products (title, description, img, price, catogery_id) VALUES ('Golden fish', 'fish', 'https://i.pinimg.com/564x/5f/16/9a/5f169ac3249f4b618fdc9382b1af7116.jpg', 50,1);
INSERT INTO products (title, description, img, price, catogery_id) VALUES ('Rollechen', 'fish', 'https://i.pinimg.com/236x/69/9a/19/699a1924fc604a7af573a8238182ce00.jpg', 50,2);
INSERT INTO products (title, description, img, price, catogery_id) VALUES ('Brownie Fudge Swirl', 'fish', 'https://i.pinimg.com/564x/cf/7a/9a/cf7a9a7431d8630aecd1f7ab5d984f63.jpg', 50,4);

COMMIT;
