# TastyTally (tentative name)
Team 39 - Voyage 53

## Application Description

**Purpose/Mission of the Application:**

Our application, **"TastyTally"**, helps groups or pairs of people quickly and fairly decide where to eat. By simplifying the decision-making process, TastyTally removes the stress and indecision often involved in group food choices. Whether you’re planning a casual dinner now or organizing a group outing in the future, our platform streamlines the selection and voting process to ensure everyone has a voice—and a delicious outcome.

**What TastyTally Does:**

1. **Event Creation**: Users can create unique events with custom names, dates, times, and durations for selecting and voting.
2. **Collaborative Selection**: Friends can contribute their suggestions for dining spots using a sharable event link. The app even suggests highly-rated local restaurants based on user preferences and location.
3. **Democratic Voting**: Participants vote on the suggestions. The app tallies votes in real time, identifies winners, and resolves ties with a fun tie-breaker process.
4. **Instant Decisions**: Need an answer now? Use the “Quick Event” mode to make immediate decisions with fast-paced selection and voting periods.

By balancing individual preferences with group consensus, TastyTally makes choosing a dining spot an engaging and enjoyable experience.

## Project Management

https://voyage53-team39.atlassian.net/

## Our Team

- Oscar Sanchez: [GitHub](https://github.com/oscarsanchez13) / [LinkedIn](https://www.linkedin.com/in/oscarsanchez13/)
- Angelo Sarmiento: [GitHub](https://github.com/LifeAsDev) / [LinkedIn](https://www.linkedin.com/in/angelo-sarmiento-1bab3b290/)
- Eoin McDonnell: [GitHub](https://github.com/oldmcdonnell)
- Paul Pessoa: [GitHub](https://github.com/paulpessoa) / [LinkedIn](https://www.linkedin.com/in/paulmspessoa/)

## Getting Started

Follow these steps to set up and run the application locally:

1. **Install Dependencies**

   First, install the required dependencies by running:

   ```bash
   npm install
   ```

2. **Create `docker-compose.yml`**

   ```yaml
   services:
     team39-db:
       image: bitnami/postgresql
       container_name: team39-db
       ports:
         - "5432:5432"
       volumes:
         - team39_pgdata:/var/lib/postgresql/data
       environment:
         - POSTGRESQL_USERNAME=docker
         - POSTGRESQL_PASSWORD=docker
         - POSTGRESQL_DATABASE=team39db

   volumes:
     team39_pgdata:




3. **Run Docker Compose**

   Download and install Docker and run on your machine. Navigate to the root of the project directory and execute:

   ```bash
   docker-compose up -d
   ```

   This command will start a PostgreSQL database as defined in `docker-compose.yml` with persistent storage, ensuring data retention across restarts.

4. **Set Up Environment Variables**

   In the root directory, create a `.env` file with the following content:

   ```env
   DATABASE_URL="postgresql://docker:docker@localhost:5432/team39db"
   ```

   Ensure that `DATABASE_URL` matches the credentials and database settings configured in `docker-compose.yml`.

   Create a environment variable called `AUTH_SECRET` and assign some string (any string) to it.
   This is used by NextAuth to generate a token.

5. **Install Prisma@5.22.0**

   npm install prisma@5.22.0

6. **apply migrations**

   npx prisma migrate dev
