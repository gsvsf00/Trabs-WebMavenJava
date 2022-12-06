--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-07-04 13:57:38

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

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 231 (class 1259 OID 198419)
-- Name: evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento (
    id bigint NOT NULL,
    classification integer,
    duration character varying(255),
    eventdate timestamp without time zone,
    eventidentifier character varying(255),
    event_status integer,
    launchyear integer,
    type integer,
    name character varying(255),
    synopsis character varying(2000)
);


ALTER TABLE public.evento OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 198418)
-- Name: evento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evento_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.evento_id_seq OWNER TO postgres;

--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 230
-- Name: evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_id_seq OWNED BY public.evento.id;


--
-- TOC entry 229 (class 1259 OID 143525)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 198427)
-- Name: ingresso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingresso (
    id bigint NOT NULL,
    price bigint,
    seat character varying(255),
    type integer,
    idsessao bigint,
    idvenda bigint
);


ALTER TABLE public.ingresso OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 198432)
-- Name: loginsession; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.loginsession (
    id bigint NOT NULL,
    expirationdate timestamp without time zone NOT NULL,
    logindate timestamp without time zone NOT NULL,
    logoutdate timestamp without time zone,
    token character varying(255) NOT NULL,
    useridentifier character varying(255)
);


ALTER TABLE public.loginsession OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 198439)
-- Name: sessao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessao (
    id bigint NOT NULL,
    dtsessao timestamp without time zone,
    status integer,
    valorinteira bigint,
    idevento bigint,
    idlocal bigint
);


ALTER TABLE public.sessao OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 198444)
-- Name: tblocal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tblocal (
    id bigint NOT NULL,
    numerodeassentos bigint,
    localevento character varying(255)
);


ALTER TABLE public.tblocal OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 198449)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id bigint NOT NULL,
    dtnascimento timestamp without time zone,
    doc character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    tipousuario integer,
    salt character varying(255),
    sex character varying(255) NOT NULL,
    telephone character varying(255) NOT NULL,
    useridentifier character varying(255)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 198456)
-- Name: venda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.venda (
    id bigint NOT NULL,
    nrdocumento character varying(255),
    tipodedocumento integer,
    formadepagamento character varying(255),
    nrvalorvenda bigint,
    nrprotocolo bigint,
    dtvenda timestamp without time zone,
    tipovenda integer,
    nomecliente character varying(255),
    idusuario bigint
);


ALTER TABLE public.venda OWNER TO postgres;

--
-- TOC entry 3231 (class 2604 OID 198422)
-- Name: evento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento ALTER COLUMN id SET DEFAULT nextval('public.evento_id_seq'::regclass);


--
-- TOC entry 3394 (class 0 OID 198419)
-- Dependencies: 231
-- Data for Name: evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento (id, classification, duration, eventdate, eventidentifier, event_status, launchyear, type, name, synopsis) FROM stdin;
2	16	02h 05min	2022-06-22 16:07:55	e3d0222c-fb9f-11ec-b939-0242ac120002	1	2015	1	Cinquenta Tons de Cinza	baseado na obra de mesmo nome conquista toda e qualquer mulher que deseja. Anastasia fica perdidamente atraída por Christian Grey, que também se interessa pela jovem. Com isso, Anastasia cede aos desejos, enfrenta seus medos e ultrapassa seus limites, a fim de ficar com aquele que acredita ser o amor de sua vida. Assim como no livro, o filme Cinquenta Tons de Cinza é repleto de sensualidade e erotismo para narrar este romance.
3	12	01h 46min	2022-06-22 16:07:55	1f38b48c-fba0-11ec-b939-0242ac120002	0	2022	0	O Projeto Adam	Em O Projeto Adam, Adam Reed é um menino de 13 anos que ainda está de luto pela morte repentina de seu pai um ano antes. Ele vai para a garagem de sua casa uma noite e acaba encontrando um piloto ferido escondido. Este misterioso piloto acaba por ser a versão mais antiga de si mesmo do futuro. Um futuro onde viagens no tempo são possíveis e ele acabou voltando para seu passado, presente de Adam de 13 anos. Ele arriscou tudo para voltar no tempo em uma missão secreta. Juntos, eles devem embarcar em uma aventura no passado para encontrar seu pai, acertar as coisas e salvar o mundo. Trabalhando juntos, tanto o jovem quanto o adulto Adam, aceitam a perda de seu pai e têm a chance de curar as feridas que os moldaram. Aumentando o desafio da missão, os dois Adams descobrem que realmente não gostam muito um do outro e, se quiserem salvar o mundo, primeiro terão que descobrir como se dar bem.
4	14	01h 50smin	2022-06-22 16:07:55	1f38b220-fba0-11ec-b939-0242ac120002	2	2013	1	Invocação do Mal	Harrisville, Estados Unidos. Um casal (Ron Livinston e Lili Taylor) muda para uma casa nova ao lado de suas cinco filhas. Inexplicavelmente, estranhos acontecimentos começam a assustar as crianças, o pai e, principalmente, a mãe. Preocupada com algumas manchas que aparecem em seu corpo e com uma sequência de sustos que levou, ela decide procurar um famoso casal de investigadores paranormais (Patrick Wilson e Vera Farmiga), mas eles não aceitam o convite, acreditando ser somente mais um engano de pessoas apavoradas com canos que fazem barulhos durante a noite ou coisas do gênero. Porém, quando eles aceitam fazer uma visita ao local, descobrem que algo muito poderoso e do mal reside ali. Agora, eles precisam descobrir o que é e o porquê daquilo tudo acontecendo com os membros daquela família. É quando o passado começa a revelar uma entidade demoníaca querendo continuar sua trajetória de maldades.
5	14	01h 46min	2022-06-22 16:07:55	3d058b98-fba0-11ec-b939-0242ac120002	1	2016	1	 Esquadrão suicida	Após a aparição do Superman, a agente Amanda Waller (Viola Davis) está convencida que o governo americano precisa ter sua própria equipe de metahumanos, para combater possíveis ameaças. Para tanto ela cria o projeto do Esquadrão Suicida, onde perigosos vilões encarcerados são obrigados a executar missões a mando do governo. Caso sejam bem-sucedidos, eles têm suas penas abreviadas em 10 anos. Caso contrário, simplesmente morrem. O grupo é autorizado pelo governo após o súbito ataque de Magia (Cara Delevingne), uma das "convocadas" por Amanda, que se volta contra ela. Desta forma, Pistoleiro (Will Smith), Arlequina (Margot Robbie), Capitão Bumerangue (Jai Courtney), Crocodilo (Adewale Akinnuoye-Agbaje), El Diablo (Jay Hernandez) e Amarra (Adam Beach) são convocados para a missão. Paralelamente, o Coringa (Jared Leto) aproveita a oportunidade para tentar resgatar o amor de sua vida: Arlequina.
\.


--
-- TOC entry 3395 (class 0 OID 198427)
-- Dependencies: 232
-- Data for Name: ingresso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingresso (id, price, seat, type, idsessao, idvenda) FROM stdin;
\.


--
-- TOC entry 3396 (class 0 OID 198432)
-- Dependencies: 233
-- Data for Name: loginsession; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.loginsession (id, expirationdate, logindate, logoutdate, token, useridentifier) FROM stdin;
\.


--
-- TOC entry 3397 (class 0 OID 198439)
-- Dependencies: 234
-- Data for Name: sessao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessao (id, dtsessao, status, valorinteira, idevento, idlocal) FROM stdin;
\.


--
-- TOC entry 3398 (class 0 OID 198444)
-- Dependencies: 235
-- Data for Name: tblocal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tblocal (id, numerodeassentos, localevento) FROM stdin;
\.


--
-- TOC entry 3399 (class 0 OID 198449)
-- Dependencies: 236
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, dtnascimento, doc, email, name, password, tipousuario, salt, sex, telephone, useridentifier) FROM stdin;
\.


--
-- TOC entry 3400 (class 0 OID 198456)
-- Dependencies: 237
-- Data for Name: venda; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.venda (id, nrdocumento, tipodedocumento, formadepagamento, nrvalorvenda, nrprotocolo, dtvenda, tipovenda, nomecliente, idusuario) FROM stdin;
\.


--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 230
-- Name: evento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_id_seq', 5, true);


--
-- TOC entry 3409 (class 0 OID 0)
-- Dependencies: 229
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 22, true);


--
-- TOC entry 3233 (class 2606 OID 198426)
-- Name: evento evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_pkey PRIMARY KEY (id);


--
-- TOC entry 3235 (class 2606 OID 198431)
-- Name: ingresso ingresso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresso
    ADD CONSTRAINT ingresso_pkey PRIMARY KEY (id);


--
-- TOC entry 3237 (class 2606 OID 198438)
-- Name: loginsession loginsession_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.loginsession
    ADD CONSTRAINT loginsession_pkey PRIMARY KEY (id);


--
-- TOC entry 3239 (class 2606 OID 198443)
-- Name: sessao sessao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessao
    ADD CONSTRAINT sessao_pkey PRIMARY KEY (id);


--
-- TOC entry 3241 (class 2606 OID 198448)
-- Name: tblocal tblocal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tblocal
    ADD CONSTRAINT tblocal_pkey PRIMARY KEY (id);


--
-- TOC entry 3243 (class 2606 OID 198464)
-- Name: usuario uk_qv0vbojyc7yjh81mle3gm7i7k; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT uk_qv0vbojyc7yjh81mle3gm7i7k UNIQUE (doc);


--
-- TOC entry 3245 (class 2606 OID 198455)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 3247 (class 2606 OID 198462)
-- Name: venda venda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda
    ADD CONSTRAINT venda_pkey PRIMARY KEY (id);


--
-- TOC entry 3250 (class 2606 OID 198475)
-- Name: sessao fk19bjwgdjbywl01q1vkqsnwlrk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessao
    ADD CONSTRAINT fk19bjwgdjbywl01q1vkqsnwlrk FOREIGN KEY (idevento) REFERENCES public.evento(id);


--
-- TOC entry 3251 (class 2606 OID 198480)
-- Name: sessao fk1pshtonsisyovm13w4wco4wne; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessao
    ADD CONSTRAINT fk1pshtonsisyovm13w4wco4wne FOREIGN KEY (idlocal) REFERENCES public.tblocal(id);


--
-- TOC entry 3248 (class 2606 OID 198465)
-- Name: ingresso fk6bbo48unjvbjl8lrjn3f1ie9w; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresso
    ADD CONSTRAINT fk6bbo48unjvbjl8lrjn3f1ie9w FOREIGN KEY (idsessao) REFERENCES public.sessao(id);


--
-- TOC entry 3249 (class 2606 OID 198470)
-- Name: ingresso fkf9m5dewbs36v29ss5rs2yp98r; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresso
    ADD CONSTRAINT fkf9m5dewbs36v29ss5rs2yp98r FOREIGN KEY (idvenda) REFERENCES public.venda(id);


--
-- TOC entry 3252 (class 2606 OID 198485)
-- Name: venda fkg65fv8srifclbb98bf9m394wa; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venda
    ADD CONSTRAINT fkg65fv8srifclbb98bf9m394wa FOREIGN KEY (idusuario) REFERENCES public.usuario(id);


-- Completed on 2022-07-04 13:57:38

--
-- PostgreSQL database dump complete
--

