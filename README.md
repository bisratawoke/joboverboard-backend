# JobOverboard API

A **NestJS** application that provides REST APIs for managing and retrieving job listings. The API supports creating, reading, updating, and deleting (CRUD) job records.

## Features

- Retrieve all available jobs.
- Get details of a specific job.
- Create a new job listing.
- Update an existing job listing.
- Delete a job listing.

## Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn**
- **PostgreSQL** (or another database supported by your configuration)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/job-listings-api.git
   cd job-listings-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the environment:

   - Rename `.env.example` to `.env`.
   - Update the database connection and other environment variables as needed.

4. Start the application:
   - In development:
     ```bash
     npm run start:dev
     ```
   - In production:
     ```bash
     npm run start
     ```

## API Endpoints

| Method | Endpoint    | Description                     |
| ------ | ----------- | ------------------------------- |
| GET    | `/jobs`     | Retrieve all available jobs.    |
| GET    | `/jobs/:id` | Retrieve details of a job.      |
| POST   | `/jobs`     | Create a new job listing.       |
| PUT    | `/jobs/:id` | Update an existing job listing. |
| DELETE | `/jobs/:id` | Delete a job listing.           |

## Example Payloads

### Create a Job (POST `/jobs`)

```json
{
  "title": "Software Engineer",
  "description": "Develop and maintain web applications.",
  "location": "Remote",
  "company": "Tech Solutions Inc."
}
```

### Update a Job (PUT `/jobs/:id`)

```json
{
  "title": "Senior Software Engineer",
  "description": "Lead development projects.",
  "location": "Remote",
  "company": "Tech Solutions Inc."
}
```

## Built With

- [NestJS](https://nestjs.com/) - A progressive Node.js framework.
- [TypeORM](https://typeorm.io/) - For database interaction.
- [PostgreSQL](https://www.postgresql.org/) - Default database (configurable).

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact **[Your Name](mailto:bisratawoke52@gmail.com)**.
