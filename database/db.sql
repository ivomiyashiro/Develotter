CREATE TABLE IF NOT EXISTS dev (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  username VARCHAR(64) NOT NULL UNIQUE,
  email VARCHAR(320) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  bio VARCHAR(160),
  profilePicture VARCHAR(2048) DEFAULT 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png',
  coverPicture VARCHAR(2048),
  birth_date DATE NOT NULL,
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO dev (name, username, email, password, birth_date) VALUES ($1, $2, $3, $4, $5)