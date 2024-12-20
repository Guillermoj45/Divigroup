create table usuario
(
    id        serial
        primary key,
    avatar    varchar(500)
        unique,
    username  varchar(45) not null,
    email     varchar(300),
    tipo_pago smallint,
    rol       smallint    not null,
    password  char(90)    not null,
    eliminado boolean default false
);

alter table usuario
    owner to postgres;

create unique index username_users
    on usuario (username)
    where (eliminado = false);

create unique index email_users
    on usuario (email)
    where (eliminado = false);

create index users_deleted
    on usuario (eliminado);

create index users_password
    on usuario (password);

create index user_password
    on usuario (password);

create table datos_personales
(
    id               integer not null
        primary key
        constraint users_datos_personales
            references usuario,
    nombre           varchar(45),
    primer_apellido  varchar(45),
    segundo_apellido varchar(45),
    fecha_nacimiento timestamp(6),
    telefono         char(12),
    direccion        varchar(150)
);

create table cuenta
(
    id           serial
        primary key,
    nombre       varchar(20)  not null,
    descripcion  varchar(400),
    imagen       varchar(200) not null,
    imagen_fondo varchar(200)
);

create table amigo
(
    usuario1  integer               not null
        constraint users_usuario1
            references usuario,
    usuario2  integer               not null
        constraint users_usuario2
            references usuario,
    confimado boolean default false not null,
    id        serial
        primary key
);

create table user_cuenta
(
    id        serial
        primary key,
    id_user   integer not null
        constraint user_user_cuentas
            references usuario
            on update cascade on delete cascade,
    id_cuenta integer not null
        constraint cuentas_user_cuentas
            references cuenta
            on update cascade on delete cascade,
    is_admin  boolean not null
);

create table producto
(
    id          serial
        primary key,
    nombre      varchar(100) not null,
    precio      numeric(8, 2),
    descripcion varchar(400),
    imagen      varchar(200),
    id_cuenta   integer      not null
        constraint cuenta_producto
            references cuenta
            on update cascade on delete cascade,
    id_users    integer      not null
        constraint user_producto
            references usuario
            on update cascade on delete cascade,
    fecha       timestamp default now(),
    facturas    varchar(200)
);

create table historial_pago
(
    id        serial
        primary key,
    tipo_pago smallint not null,
    id_users  integer  not null
        constraint users_historial_pagos
            references usuario,
    id_cuenta integer
        references cuenta,
    monton    double precision
);

create table notificacion
(
    id       serial
        primary key,
    fecha    timestamp(6),
    mensaje  varchar(200) not null,
    visto    boolean,
    users_id integer      not null
        constraint users_notificaciones
            references usuario
);


create table chat
(
    id          serial
        primary key,
    id_usuario1 integer                             not null
        constraint fk_user1
            references usuario,
    id_usuario2 integer                             not null
        constraint fk_user2
            references usuario,
    hora        timestamp default CURRENT_TIMESTAMP not null,
    mensaje     text
);


