--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: benevoles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.benevoles (
    idbenevole integer NOT NULL,
    prenom character varying(30),
    nombenevole character varying(30),
    email character varying(30)
);


ALTER TABLE public.benevoles OWNER TO postgres;

--
-- Name: benevoles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.benevoles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.benevoles_id_seq OWNER TO postgres;

--
-- Name: benevoles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.benevoles_id_seq OWNED BY public.benevoles.idbenevole;


--
-- Name: creneaux; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.creneaux (
    idcreneau integer NOT NULL,
    debut character varying(30),
    fin character varying(30)
);


ALTER TABLE public.creneaux OWNER TO postgres;

--
-- Name: creneaux_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.creneaux_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.creneaux_id_seq OWNER TO postgres;

--
-- Name: creneaux_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.creneaux_id_seq OWNED BY public.creneaux.idcreneau;


--
-- Name: jeux; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jeux (
    idjeux integer NOT NULL,
    nomjeux character varying(30),
    type character varying(30),
    zone integer
);


ALTER TABLE public.jeux OWNER TO postgres;

--
-- Name: jeux_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jeux_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jeux_id_seq OWNER TO postgres;

--
-- Name: jeux_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jeux_id_seq OWNED BY public.jeux.idjeux;


--
-- Name: relations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.relations (
    idcreneau integer,
    idbenevole integer,
    idzone integer
);


ALTER TABLE public.relations OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(30),
    password character varying(30)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: zones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.zones (
    idzone integer NOT NULL,
    nomzone character varying(30)
);


ALTER TABLE public.zones OWNER TO postgres;

--
-- Name: zones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.zones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.zones_id_seq OWNER TO postgres;

--
-- Name: zones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.zones_id_seq OWNED BY public.zones.idzone;


--
-- Name: benevoles idbenevole; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.benevoles ALTER COLUMN idbenevole SET DEFAULT nextval('public.benevoles_id_seq'::regclass);


--
-- Name: creneaux idcreneau; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.creneaux ALTER COLUMN idcreneau SET DEFAULT nextval('public.creneaux_id_seq'::regclass);


--
-- Name: jeux idjeux; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jeux ALTER COLUMN idjeux SET DEFAULT nextval('public.jeux_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: zones idzone; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zones ALTER COLUMN idzone SET DEFAULT nextval('public.zones_id_seq'::regclass);


--
-- Data for Name: benevoles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.benevoles (idbenevole, prenom, nombenevole, email) FROM stdin;
8	GREIL	Dino	dino.greil@gmail.com
22	dxvccv	n	test@test
\.


--
-- Data for Name: creneaux; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.creneaux (idcreneau, debut, fin) FROM stdin;
1	8h	9h30
2	9h30	11h
3	11h	12h30
\.


--
-- Data for Name: jeux; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jeux (idjeux, nomjeux, type, zone) FROM stdin;
13	paint ball	ambiance	20
14	balle au prisonier	famille	12
1	loup-garou	ambiance	1
\.


--
-- Data for Name: relations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.relations (idcreneau, idbenevole, idzone) FROM stdin;
1	8	1
2	8	1
3	8	1
1	22	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
1	dino.greil@example.com	zazatest
\.


--
-- Data for Name: zones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.zones (idzone, nomzone) FROM stdin;
1	Antigone-Loup-Garous
2	Esplanade-Gauche 1
3	Esplanade-Gauche 2
4	Esplanade-Gauche 3
5	Esplanade-Centre 1
6	Esplanade-Centre 2
7	Esplanade-Centre 3
8	Esplanade-Centre 4
9	Esplanade-Centre 5
10	Esplanade-Droite 1
11	Esplanade-Droite 2
12	Esplanade-Droite 3
13	Esplanade-Accueil
14	Antigone-Buvette
15	Antigone-Entree 1
16	Antigone-Entree 2
17	Antigone-Entree 3
18	Antigone-Entree 4
19	Antigone-Entree 5
20	Antigone-Fond 1
21	Antigone-Fond 2
22	Antigone-Proto
\.


--
-- Name: benevoles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.benevoles_id_seq', 30, true);


--
-- Name: creneaux_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.creneaux_id_seq', 3, true);


--
-- Name: jeux_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jeux_id_seq', 21, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: zones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.zones_id_seq', 22, true);


--
-- Name: benevoles benevoles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.benevoles
    ADD CONSTRAINT benevoles_pkey PRIMARY KEY (idbenevole);


--
-- Name: creneaux creneaux_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.creneaux
    ADD CONSTRAINT creneaux_pkey PRIMARY KEY (idcreneau);


--
-- Name: jeux jeux_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jeux
    ADD CONSTRAINT jeux_pkey PRIMARY KEY (idjeux);


--
-- Name: relations relations_idcreneau_idbenevole_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.relations
    ADD CONSTRAINT relations_idcreneau_idbenevole_key UNIQUE (idcreneau, idbenevole);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: zones zones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zones
    ADD CONSTRAINT zones_pkey PRIMARY KEY (idzone);


--
-- Name: relations relations_idbenevole_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.relations
    ADD CONSTRAINT relations_idbenevole_fkey FOREIGN KEY (idbenevole) REFERENCES public.benevoles(idbenevole) ON DELETE CASCADE;


--
-- Name: relations relations_idcreneau_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.relations
    ADD CONSTRAINT relations_idcreneau_fkey FOREIGN KEY (idcreneau) REFERENCES public.creneaux(idcreneau) ON DELETE CASCADE;


--
-- Name: relations relations_idzone_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.relations
    ADD CONSTRAINT relations_idzone_fkey FOREIGN KEY (idzone) REFERENCES public.zones(idzone) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

