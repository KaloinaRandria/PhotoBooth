--formatage des identifiant lors de l'insertion

--membre
CREATE OR REPLACE FUNCTION generate_membre_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_membre := 'MEMBRE' || nextval('membre_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_membre
BEFORE INSERT ON membre
FOR EACH ROW
EXECUTE FUNCTION generate_membre_id();

--salle
CREATE OR REPLACE FUNCTION generate_salle_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_salle := 'SAL' || nextval('salle_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_salle
BEFORE INSERT ON salle
FOR EACH ROW
EXECUTE FUNCTION generate_salle_id();

--categorie
CREATE OR REPLACE FUNCTION generate_categorie_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_categorie := 'CAT' || nextval('categorie_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_categorie
BEFORE INSERT ON categorie
FOR EACH ROW
EXECUTE FUNCTION generate_categorie_id();

--theme
CREATE OR REPLACE FUNCTION generate_theme_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_theme := 'THE' || nextval('theme_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_theme
BEFORE INSERT ON theme
FOR EACH ROW
EXECUTE FUNCTION generate_theme_id();

--materiel
CREATE OR REPLACE FUNCTION generate_materiel_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_materiel := 'MAT' || nextval('materiel_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_materiel
BEFORE INSERT ON materiel
FOR EACH ROW
EXECUTE FUNCTION generate_materiel_id();

--service
CREATE OR REPLACE FUNCTION generate_service_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_service := 'SERV' || nextval('service_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_service
BEFORE INSERT ON service
FOR EACH ROW
EXECUTE FUNCTION generate_service_id();

--client
CREATE OR REPLACE FUNCTION generate_client_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_client := 'CLI' || nextval('client_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_client
BEFORE INSERT ON client
FOR EACH ROW
EXECUTE FUNCTION generate_client_id();

--reservation
CREATE OR REPLACE FUNCTION generate_reservation_id() RETURNS TRIGGER AS $$
BEGIN
    NEW.id_reservation := 'RES' || nextval('reservation_id');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_id_reservation
BEFORE INSERT ON reservation
FOR EACH ROW
EXECUTE FUNCTION generate_reservation_id();