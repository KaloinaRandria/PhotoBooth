--extension necessaire

--utilisation du cryptage bcrypt pour les mots de passe(voir exemple d'insertion data.sql)
--pas necessaire si gerer cote back
CREATE EXTENSION IF NOT EXISTS pgcrypto;

--DATABASE ET ROLE
CREATE role photobooth LOGIN PASSWORD 'photobooth';
CREATE DATABASE photobooth;
ALTER DATABASE photobooth OWNER TO photobooth;

--TABLES 
--LOGIN
CREATE TABLE role(
    id_role SERIAL PRIMARY KEY,
    intitule VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE poste(
    id_poste SERIAL PRIMARY KEY,
    intitule VARCHAR(25) NOT NULL UNIQUE
);

CREATE SEQUENCE membre_id START 1 INCREMENT 1;
CREATE TABLE membre(
    id_membre VARCHAR(20) PRIMARY KEY,
    id_role INT REFERENCES role(id_role) NOT NULL,
    nom VARCHAR(25) NOT NULL,
    prenom VARCHAR(25) NOT NULL,
    date_de_naissance DATE NOT NULL,
    username VARCHAR(25) NOT NULL,
    mail VARCHAR(60) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_embauche DATE NOT NULL,
    id_poste INT REFERENCES poste(id_poste) NOT NULL
    CONSTRAINT email_format CHECK(mail ~* '^[A-Za-z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|mg|fr)$')
);
ALTER TABLE membre ADD UNIQUE(username,mail);

CREATE TABLE image_membre(
    id_image_membre SERIAL PRIMARY KEY,
    id_membre VARCHAR(20) REFERENCES membre(id_membre) NOT NULL,
    image_url VARCHAR(250) NOT NULL,
    date_insertion TIMESTAMP
);

--modification de la contrainte pour le format du mail, securisation du format de mail
ALTER TABLE membre DROP CONSTRAINT email_format;
ALTER TABLE membre ADD CONSTRAINT email_format CHECK (mail ~* '^[A-Za-z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|mg|fr)$');

--SALLE 

CREATE SEQUENCE salle_id START 1 INCREMENT 1;
CREATE TABLE salle(
    id_salle CHAR(6) PRIMARY KEY,
    numero INT NOT NULL
);

CREATE TABLE image_salle(
    id_image_salle SERIAL PRIMARY KEY,
    image_url VARCHAR(250) NOT NULL,
    date_insertion TIMESTAMP
);

--CATEGORIE 
CREATE SEQUENCE categorie_id START 1 INCREMENT 1;
CREATE TABLE categorie(
    id_categorie VARCHAR(10) PRIMARY KEY,
    intitule VARCHAR(100) NOT NULL UNIQUE
);

--THEME & MATERIEL

CREATE SEQUENCE theme_id START 1 INCREMENT 1;
CREATE TABLE theme(
    id_theme VARCHAR(10) PRIMARY KEY,
    id_salle CHAR(6) NOT NULL REFERENCES salle(id_salle),
    id_categorie VARCHAR(10) NOT NULL REFERENCES categorie(id_categorie),
    intitule VARCHAR(100) NOT NULL UNIQUE,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    description VARCHAR(250)
);

CREATE TABLE image_theme(
    id_image_theme SERIAL PRIMARY KEY,
    id_theme VARCHAR(10) NOT NULL REFERENCES theme(id_theme),
    image_url VARCHAR(250) NOT NULL,
    date_insertion TIMESTAMP NOT NULL
);

CREATE SEQUENCE materiel_id START 1 INCREMENT 1;
CREATE TABLE materiel(
    id_materiel VARCHAR(10) PRIMARY KEY,
    intitule VARCHAR(50) NOT NULL UNIQUE,
    prix DECIMAL(10,2) NOT NULL
);

--deux propositions pour la quantite de materiel a disposition
--Proposition 1 creation de table materiel_quantite pour du transactionnel
CREATE TABLE materiel_quantite(
    id_materiel_quantite SERIAL PRIMARY KEY,
    id_materiel VARCHAR(10) NOT NULL REFERENCES materiel(id_materiel),
    quantite INT NOT NULL DEFAULT 0
);
--Proposition 2 ajout direct de la quantite dans materiel et modification avec update
CREATE TABLE materiel(
    id_materiel VARCHAR(10) PRIMARY KEY,
    intitule VARCHAR(50) NOT NULL UNIQUE,
    quantite INT NOT NULL DEFAULT 0
    prix DECIMAL(10,2) NOT NULL
);

CREATE TABLE materiel_theme(
    id_materiel_theme SERIAL PRIMARY KEY,
    id_materiel VARCHAR(10) NOT NULL REFERENCES materiel(id_materiel),
    id_theme VARCHAR(10) NOT NULL REFERENCES theme(id_theme)
);

--SALAIRES
create table salaire(
    id_salaire SERIAL PRIMARY KEY,
    id_membre VARCHAR(20) references membre(id_membre)  not null,
    montant decimal(10,2) not null,
    date_insertion date not null
);

CREATE SEQUENCE service_id START 1 INCREMENT 1;
create table service(
    id_service VARCHAR(11) PRIMARY KEY,
    intitule varchar(250) not null unique,
    prix_unitaire decimal(10,2) not null
);

create table tarif_service(
    id_tarif_service SERIAL PRIMARY KEY,
    id_service VARCHAR(10) NOT NULL REFERENCES service(id_service),
    nombre int
);

CREATE SEQUENCE client_id START 1 INCREMENT 1;
create table client(
    id_client VARCHAR(10) PRIMARY KEY,
    nom varchar(250) not null,
    prenom varchar(250)not null,
    email varchar(250)not null unique,
    num_telephone varchar(250) not null unique
);
--modification de la contrainte pour le format du mail, securisation du format de mail
ALTER TABLE client ADD CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|mg|fr)$');

create table image_client(
    id_image_client SERIAL PRIMARY KEY,
    id_client VARCHAR(10) REFERENCES client(id_client),
    image_url varchar(250) not null,
    date_insertion TIMESTAMP 
);

CREATE SEQUENCE reservation_id START 1 INCREMENT 1;
create table reservation(
    id_reservation VARCHAR(15) PRIMARY KEY,
    date_reservation TIMESTAMP not null ,
    date_reservee DATE not null,
    id_client VARCHAR(10) references client(id_client) not null,
    id_service VARCHAR(10) references service(id_service) not null,
    heure_debut TIME not null,
    heure_fin TIME not null,
    prix decimal(10,2) not null
);

create table resevration_detail(
    id_detail SERIAL PRIMARY KEY,
    id_resevation VARCHAR(15) references reservation (id_reservation)  not null,
    id_materiel VARCHAR(10) references materiel(id_materiel) not null
);

create table historique(
    id_historique SERIAL PRIMARY KEY,
    id_theme VARCHAR(10) NOT NULL REFERENCES theme(id_theme),
    date_debut date not null,
    date_fin date not null,
    montant_entrant decimal(10,2) not null
);

