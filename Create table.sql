
CREATE TABLE benevoles (
  IDbenevole SERIAL PRIMARY KEY,
  prenom VARCHAR(30),
  nombenevole VARCHAR(30),
  email VARCHAR(30),
  admin BOOLEAN,
  password VARCHAR(30),
  
);

CREATE TABLE zones (
  IDzone SERIAL PRIMARY KEY,
  nomzone VARCHAR(30),
  nbbenevole int
);
CREATE TABLE creneaux (
  IDcreneau SERIAL PRIMARY KEY,
  debut Timestamp,
  fin Timestamp,
  jour int,
  foreign key (jour) references jourfestivals(IDjour) ON DELETE CASCADE,
);
CREATE TABLE festivals (
  IDfestival SERIAL PRIMARY KEY,
  nomfestival VARCHAR(30),
  annee VARCHAR(30),
  nbjour int,
  cloturer BOOLEAN,
)
CREATE TABLE jourfestivals (
  IDjour SERIAL PRIMARY KEY,
  nomjour VARCHAR(30),
  debut Timestamp,
  fin Timestamp,
  festival int,
  foreign key (festival) references festivals(IDfestival) ON DELETE CASCADE,
)

CREATE TABLE travail (
     idCreneau int,
     foreign key (idCreneau) references creneaux(IDcreneau) ON DELETE CASCADE,
      idBenevole int,
      foreign key (idBenevole) references benevoles(IDbenevole) ON DELETE CASCADE, 
      idZone int,
      foreign key (idZone) references zones(IDzone) ON DELETE CASCADE,
      UNIQUE (idCreneau, idBenevole));

CREATE TABLE disponible (
  idCreneau int,
     foreign key (idCreneau) references creneaux(IDcreneau) ON DELETE CASCADE,
      idBenevole int,
      foreign key (idBenevole) references benevoles(IDbenevole) ON DELETE CASCADE, 
UNIQUE (idCreneau, idBenevole))
CREATE TABLE ZoneCreneau(
  idCreneau int,
     foreign key (idCreneau) references creneaux(IDcreneau) ON DELETE CASCADE,
     idZone int,
      foreign key (idZone) references zones(IDzone) ON DELETE CASCADE,
      UNIQUE (idCreneau, idZone)
)
CREATE TABLE ZoneFestival(
  idFestival int,
     foreign key (IDfestival) references festivals(IDfestival) ON DELETE CASCADE,
     idZone int,
      foreign key (idZone) references zones(IDzone) ON DELETE CASCADE,
      UNIQUE (idFestival, idZone)
)
