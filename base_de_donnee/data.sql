--donnée test role
INSERT INTO role (intitule) VALUES ('admin');

--donnée test  poste
INSERT INTO poste (intitule) VALUES ('Chef de projet');

--donnée test membre
INSERT INTO membre (id_role,nom,prenom,date_de_naissance,username,mail,mot_de_passe,date_embauche,id_poste) VALUES (1,'RAKOTO','Jean','20/06/1993','Jean','RakotoJean@gmail.com',crypt('jeanDp', gen_salt('bf')),'15/02/2020',1);

INSERT INTO membre (id_role,nom,prenom,date_de_naissance,username,mail,mot_de_passe,date_embauche,id_poste) VALUES (1,'RAKOTO','Jean','20/06/1993','Jean','RakotoJean@hotmail.com',crypt('jeanDp', gen_salt('bf')),'15/02/2020',1);