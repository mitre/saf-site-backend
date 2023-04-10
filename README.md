# MITRE SAF Site - Backend
  
## Overview

The MITRE Security Automation Framework (MITRE SAF©) brings together open-source, accessible applications, techniques, libraries, and tools developed by MITRE and the community to streamline security automation for Systems and in DevOps pipelines. 

This repository contains the source code for the upcoming new https://saf.mitre.org website's backend content management system.

# Getting Started / Installation

## Launching the Strapi admin console for local content building

1. Clone this repository:
    ```
    git clone https://github.com/mitre/saf-site-backend.git
    ```
2. Install project dependencies:
    ```
    yarn install
    ```
3. Set up Postgres database locally
   - Install [Postgres](https://www.postgresql.org/docs/current/tutorial-install.html) and start service on local machine. 
   - Create your Postgres user and database (Replace `CHANGEME_?` values below):
     - In shell (Linux):
        ```
        sudo su - postgres
        createuser CHANGEME_USER
        createdb CHANGEME_DB_NAME
        psql
        ```
     - In psql prompt (after running `psql`):
        ```
        alter user CHANGEME_USER  with encrypted password 'CHANGEME_PASSWORD';
        grant all privileges on database CHANGEME_DB_NAME to CHANGEME_USER 
        ```


4. Copy `.env-sample` into `.env` and replace `CHANGEME` values as appropriate
5. Launch application:
   - For development:
      ```
      yarn dev
      ```
   - For production:
      ```
      yarn build
      yarn start
      ```


The Strapi admin console should now be available at `http://localhost:1337/admin`. You can use the admin console to edit content types (i.e. database schema edits).

## Applying Edits For Production
Once your edits are complete, push the changes:
``` bash
git add .
git commit -s -m "My Edits"
git push origin my-edits
```

Head back to GitHub and open a pull request for your feature branch. Once reviewed, it will be pulled into `main` branch and deployed to the production Heroku server.

NOTE: Local development allows for modifying the database *schema*, but any new *content* you add to your local PostgreSQL database will not be preserved and must be replicated on the production Heroku database.

## Frontend Development
- Frontend is handled in the [saf-site-frontend repository](https://github.com/mitre/saf-site-frontend). You can tweak the frontend's configuration to point to your local Strapi database for local development.


## Technology Stack

- [Strapi](https://strapi.io/)
- [PostgreSQL](https://www.postgresql.org/)

# Contributing, Issues and Support

### Contributing

Please feel free to look through our issues, make a fork and submit PRs and improvements. We love hearing from our end-users and the community and will be happy to engage with you on suggestions, updates, fixes or new capabilities.

### Issues and Support

Please feel free to contact us by **opening an issue** on the issue board, or, at [saf@groups.mitre.org](mailto:saf@groups.mitre.org) should you have any suggestions, questions or issues.

### NOTICE

© 2023 The MITRE Corporation.

Approved for Public Release; Distribution Unlimited. Case Number 18-3678.

### NOTICE

MITRE hereby grants express written permission to use, reproduce, distribute, modify, and otherwise leverage this software to the extent permitted by the licensed terms provided in the LICENSE.md file included with this project.

### NOTICE

This software was produced for the U. S. Government under Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.

No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.

For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA 22102-7539, (703) 983-6000.
