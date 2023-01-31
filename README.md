# MITRE SAF Site - Backend
  
## Overview

The MITRE Security Automation Framework (MITRE SAF©) brings together open-source, accessible applications, techniques, libraries, and tools developed by MITRE and the community to streamline security automation for Systems and in DevOps pipelines. 

This repository contains the source code for the upcoming new https://saf.mitre.org website's backend content management system.

## Launching the Strapi admin console for local content building

1. [Fork repository](https://github.com/mitre/saf-site-backend) and clone it locally
2. Change directory to `saf-site-backend` and checkout a new feature branch: `cd saf-site-backend && git checkout -b my-edits` 
3. Install project dependencies: `yarn install`
4. Configure a local PostgreSQL database:
    - Have [PostgreSQL](https://www.postgresql.org/docs/current/tutorial-install.html) installed and running on your local machine
    - [Create a database](https://www.postgresql.org/docs/current/tutorial-createdb.html): `createdb strapi`


5. Change your `config/database.js` to reference the local database you just created.
```js
const parse = require('pg-connection-string').parse;
const config = parse("DATABASE_URL");
// Set DATABASE_URL local variable to postgres database connection string -- ex. `postgres://localhost:5432/strapi`

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: false
    },
    debug: false,
  },
});
```

6. Run the server: `yarn dev`

The Strapi admin console should now be available at `http://localhost:1337/admin`. You can use the admin console to edit content types (i.e. database schema edits).

7. Once your edits are complete, push the changes:
``` bash
git add .
git commit -s -m "My Edits"
git push origin my-edits
```

Head back to GitHub and open a pull request for your feature branch. Once reviewed, it will be pulled into `main` branch and deployed to the production Heroku server.

NOTE: Local development allows for modifying the database *schema*, but any new *content* you add to your local PostgreSQL database will not be preserved and must be replicated on the production Heroku database.

## Frontend Development
- Frontend is handled in the [saf-site-frontend repository](https://github.com/mitre/saf-site). You can tweak the frontend's configuration to point to your local Strapi database for local development.

## Technology Stack

- [Strapi](https://strapi.io/)
- [PostgreSQL](https://www.postgresql.org/)

# Contributing, Issues and Support

### Contributing

Please feel free to look through our issues, make a fork and submit PRs and improvements. We love hearing from our end-users and the community and will be happy to engage with you on suggestions, updates, fixes or new capabilities.

### Issues and Support

Please feel free to contact us by **opening an issue** on the issue board, or, at [saf@mitre.org](mailto:saf@mitre.org) should you have any suggestions, questions or issues.

### NOTICE

© 2022 The MITRE Corporation.

Approved for Public Release; Distribution Unlimited. Case Number 18-3678.

### NOTICE

MITRE hereby grants express written permission to use, reproduce, distribute, modify, and otherwise leverage this software to the extent permitted by the licensed terms provided in the LICENSE.md file included with this project.

### NOTICE

This software was produced for the U. S. Government under Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.

No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.

For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA 22102-7539, (703) 983-6000.
