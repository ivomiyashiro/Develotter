
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
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  first_edit boolean NOT NULL DEFAULT false
);

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
  ON DELETE CASCADE
);

-- SELECT 
-- devit.id, dev.id, devit.content, devit.img, devit.created_at, fav.id AS fav_id, comment.content as comment_content, dev.name, dev.username, dev.profile_picture 
-- FROM devit 
-- INNER JOIN dev ON devit.uid = dev.id 
-- INNER JOIN fav ON devit.id = fav.devit_id
-- INNER JOIN comment ON devit.id = comment.devit_id 
-- ORDER BY created_at DESC;

/* DEVIT FAVS */

CREATE TABLE IF NOT EXISTS fav(
  id SERIAL PRIMARY KEY,
  uid INT,
  devit_id INT,
  CONSTRAINT fk_uid
  FOREIGN KEY(uid)
  REFERENCES dev(id)
  ON DELETE CASCADE
);

ALTER TABLE fav ADD CONSTRAINT fk_devit_id FOREIGN KEY(devit_id) REFERENCES devit(id) ON DELETE CASCADE;

/* COMMENTS */

CREATE TABLE IF NOT EXISTS comment (
  id SERIAL PRIMARY KEY,
  uid INT,
  devit_id INT,
  content VARCHAR(280) NOT NULL,
  img VARCHAR(2048),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_uid
  FOREIGN KEY(uid)
  REFERENCES dev(id)
  ON DELETE CASCADE
);

ALTER TABLE comment ADD CONSTRAINT fk_devit_id FOREIGN KEY(devit_id) REFERENCES devit(id) ON DELETE CASCADE;

/* COMMENTS FAVS */

CREATE TABLE IF NOT EXISTS comment_fav (
  id SERIAL PRIMARY KEY,
  uid INT,
  comment_id INT,
  devit_id INT,
  CONSTRAINT fk_uid
  FOREIGN KEY(uid)
  REFERENCES dev(id)
  ON DELETE CASCADE
);

ALTER TABLE comment_fav ADD CONSTRAINT fk_devit_id FOREIGN KEY(devit_id) REFERENCES devit(id) ON DELETE CASCADE;

ALTER TABLE comment_fav ADD CONSTRAINT fk_comment_id FOREIGN KEY(comment_id) REFERENCES comment(id) ON DELETE CASCADE;

/* REVITS */

CREATE TABLE IF NOT EXISTS revit (
  id SERIAL PRIMARY KEY,
  uid INT,
  devit_id INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(uid)
  REFERENCES dev(id)
  ON DELETE CASCADE
);

ALTER TABLE revit ADD CONSTRAINT fk_devit_id FOREIGN KEY(devit_id) REFERENCES devit(id) ON DELETE CASCADE;

/* QUOTE REVIT */

CREATE TABLE IF NOT EXISTS quote_revit (
  id SERIAL PRIMARY KEY,
  uid INT,
  devit_id INT,
  content VARCHAR(280) NOT NULL,
  img VARCHAR(2048),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(uid)
  REFERENCES dev(id)
  ON DELETE CASCADE
);

ALTER TABLE quote_revit ADD CONSTRAINT fk_devit_id FOREIGN KEY(devit_id) REFERENCES devit(id) ON DELETE CASCADE;
