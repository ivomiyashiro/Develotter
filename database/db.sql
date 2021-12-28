
/* USERS */

CREATE TABLE IF NOT EXISTS dev (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  username VARCHAR(64) NOT NULL UNIQUE,
  email VARCHAR(320) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  bio VARCHAR(160),
  profile_picture VARCHAR(2048) DEFAULT 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png',
  cover_picture VARCHAR(2048),
  birth_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO dev (name, username, email, password, birth_date) VALUES ($1, $2, $3, $4, $5);

SELECT * FROM dev WHERE id = ($1);

/* DEVITS */

CREATE TABLE IF NOT EXISTS devit (
  id SERIAL PRIMARY KEY,
  uid INT,
  content VARCHAR(280) NOT NULL,
  img VARCHAR(2048),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_dev
  FOREIGN KEY(uid)
  REFERENCES dev(id)
);

INSERT INTO devit (uid, content, img) VALUES ($1, $2, $3);


/* COMMENTS */

CREATE TABLE IF NOT EXISTS comment (
  id SERIAL PRIMARY KEY,
  devit_id INT,
  content VARCHAR(280) NOT NULL,
  imt VARCHAR(2048),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_devit
  FOREIGN KEY(devit_id)
  REFERENCES devit(id)
);

/* FAVS */

CREATE TABLE IF NOT EXISTS fav(
  id SERIAL PRIMARY KEY,
  uid INT,
  devit_id INT,
  CONSTRAINT fk_uid
  FOREIGN KEY(uid)
  REFERENCES dev(id)
);

ALTER TABLE fav ADD CONSTRAINT fk_devit_id FOREIGN KEY(devit_id) REFERENCES devit(id);

INSERT INTO fav (uid, devit_id) VALUES ($1, $2);