# voyage-tasks

Your project's `readme` is as important to success as your code. For 
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point - 
[Keys to a well-written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

## Our Team

Everyone on your team should add their name along with a link to their GitHub
& optionally their LinkedIn profiles below. Do this in Sprint #1 to validate
your repo access and to practice PR'ing with your team *before* you start
coding!

- Oscar Sanchez: [GitHub](https://github.com/oscarsanchez13) / [LinkedIn](https://www.linkedin.com/in/oscarsanchez13/)
- Angelo Sarmiento: [GitHub](https://github.com/LifeAsDev) / [LinkedIn](https://www.linkedin.com/in/angelo-sarmiento-1bab3b290/)
- Eoin McDonnell: [GitHub](https://github.com/oldmcdonnell)
- Paul Pessoa: [GitHub](https://github.com/paulpessoa) / [LinkedIn](https://www.linkedin.com/in/paulmspessoa/)



Follow these steps to set up and run the application locally:

1. **Install Dependencies**

   First, install the required dependencies by running:

   ```bash
   npm install
   ```
2. **create docker-compose.yml**

'''
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
'''

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
