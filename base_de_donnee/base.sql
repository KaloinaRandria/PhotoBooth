

--extension necessaire

--utilisation du cryptage bcrypt pour les mots de passe(voir exemple d'insertion data.sql)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

--DATABASE ET ROLE
CREATE DATABASE photobooth;
CREATE role photobooth LOGIN PASSWORD 'photobooth';
ALTER DATABASE photobooth OWNER TO photobooth;

--TABLES 
--Login 
CREATE TABLE role(
    id_role SERIAL PRIMARY KEY,
    intitule VARCHAR(25) NOT NULL
);

CREATE TABLE poste(
    id_poste SERIAL PRIMARY KEY,
    intitule VARCHAR(25) NOT NULL
);

CREATE TABLE membre(
    id_membre SERIAL PRIMARY KEY,
    id_role INT REFERENCES role(id_role) NOT NULL,
    nom VARCHAR(25) NOT NULL,
    prenom VARCHAR(25) NOT NULL,
    date_de_naissance DATE NOT NULL,
    username VARCHAR(25) NOT NULL,
    mail VARCHAR(60) NOT NULL,
    mot_de_passe VARCHAR(60) NOT NULL,
    date_embauche DATE NOT NULL,
    id_poste INT REFERENCES poste(id_poste) NOT NULL
    CONSTRAINT email_format CHECK(mail ~* '^[A-Za-z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|mg|fr)$')
);

--modification de la contrainte pour le format du mail
ALTER TABLE membre DROP CONSTRAINT email_format;
ALTER TABLE membre ADD CONSTRAINT email_format CHECK (mail ~* '^[A-Za-z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|mg|fr)$');
