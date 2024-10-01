# Web aplikacija za dijeljenje recepata

## Sadržaj
- [Pregled](#pregled)
- [Ciljana Publika](#ciljana-publika)
- [Značajke](#značajke)
- [Tehnologije](#tehnologije)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Baza podataka](#baza-podataka)
- [Pokretanje projekta](#pokretanje-projekta)
  - [Postavljanje backend-a](#postavljanje-backend-a)
  - [Postavljanje frontend-a](#postavljanje-frontend-a)
- [API Krajnje točke](#api-krajnje-točke)
- [Varijable okoline](#varijable-okoline)
- [Licenca](#licenca)

---

## Pregled

Aplikacija **Dijeljenje recepata** je full-stack web aplikacija koja omogućuje korisnicima dijeljenje, pregledavanje i upravljanje receptima. Platforma omogućava korisnicima kreiranje računa, dijeljenje svojih omiljenih recepata, pretraživanje novih recepata i interakciju s drugim korisnicima koji vole kuhati. Sustav koristi moderne tehnologije poput Angular-a i NestJS-a kako bi osigurao brzinu i skalabilnost.

## Ciljana Publika

Aplikacija je namijenjena osobama i zajednicama koje uživaju u kuhanju i dijeljenju recepata. Idealna je za:
- **Ljubitelje kuhanja** koji žele organizirati i dijeliti svoje omiljene recepte.
- **Food blogere** koji žele podijeliti svoje kreativne recepte.
- **Kulinarske entuzijaste** koji traže nove i zanimljive recepte.
- **Društvene mreže hrane** koje žele povezati ljude kroz zajedničku strast prema kuhanju.

## Značajke

- **Registracija i autentifikacija korisnika**: Korisnici se mogu registrirati, prijaviti i upravljati svojim računom koristeći JWT autentifikaciju.
- **Upravljanje receptima**: Korisnici mogu kreirati, ažurirati, pregledavati i brisati svoje recepte.
- **Pregledavanje recepata**: Korisnici mogu pregledavati recepte drugih korisnika.
- **Pretraživanje recepata**: Korisnici mogu pretraživati recepte prema sastojcima, nazivu ili vremenu pripreme.
- **Omiljeni recepti**: Korisnici mogu spremiti recepte koje im se sviđaju.
- **Responzivan dizajn**: Frontend je prilagođen za mobilne uređaje, tablete i računala.

## Tehnologije

Projekt koristi modularnu arhitekturu s odvojenim frontend-om i backend-om.

### Frontend

- **Framework**: [Angular](https://angular.io/)
- **UI Komponente**: [Bootstrap](https://getbootstrap.com/) za responzivan dizajn.
- **Upravljanje stanjem**: Angular servisi i Observable-ovi.
- **Navigacija**: Angular Router za navigaciju između stranica.
- **Komunikacija s backend-om**: HttpClientModule za slanje zahtjeva prema backend-u.

### Backend

- **Framework**: [NestJS](https://nestjs.com/)
- **Autentifikacija**: JWT (JSON Web Tokens) za sigurnu autentifikaciju korisnika.
- **ORM**: TypeORM za rad s bazom podataka.
- **Validacija**: Korištenje `class-validator` za validaciju podataka.
- **Sigurnost**: Hashiranje lozinki pomoću `bcrypt` i zaštita ruta s JWT tokenima.

### Baza podataka

- **PostgreSQL**: Relacijska baza podataka za pohranu podataka o korisnicima i receptima.

## Pokretanje projekta

Za lokalno pokretanje projekta, potrebno je postaviti backend i frontend dio aplikacije.

### Postavljanje backend-a

1. **Instalirajte ovisnosti**:
   ```bash
   cd recipe-sharing-backend
   npm install

2. **Konfigurirajte varijable okoline**:
U root direktoriju backend-a kreirajte `.env` datoteku sa sljedećim sadržajem:
   ```bash
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=admin
   DATABASE_PASSWORD=admin123
   DATABASE_NAME=recipe_sharing_db
   JWT_SECRET=vaš_jwt_tajni_kljuc
    