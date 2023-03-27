INSERT INTO benevoles (prenom,nombenevole,email,admin,password) VALUES ('test','benevole','test@benevole',FALSE,'motdepasse');
INSERT INTO festivals(nomfestival,annee,nbjour,cloturer) VALUES ('Champ','2012',3,FALSE)
INSERT INTO zones (nomzone,nbbenevole) VALUES ('Antigone-Loup-Garous',4);
INSERT INTO creneaux (debut,fin,jour) VALUES (CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1);
INSERT INTO jourfestivals (nomjour,debut,fin,festival) VALUES ('Lundi',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1)
INSERT INTO travail (idCreneau,idBenevole,idZone) VALUES (1,1,1);
INSERT INTO disponible (idCreneau,idBenevole) VALUES (1,1);
INSERT INTO ZoneCreneau (idZone,idCreneau) VALUES (1,1);
INSERT INTO ZoneFestival (idZone,idFestival) VALUES (1,1);