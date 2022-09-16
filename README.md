# MITRE SAF Site - Backend

MITRE Security Automation Framework Website
  
## Overview

The MITRE Security Automation Framework (SAF) brings together open-source, accessible applications, techniques, libraries, and tools developed by MITRE and the community to streamline security automation for Systems and in DevOps pipelines. 

This repository contains the source code for the upcomming new https://saf.mitre.org website

# Getting Started

## Backend Development

1. [Fork repository](https://github.com/mitre/saf-site-backend) and clone it locally
2. Install project dependencies: `yarn install`
3. For developing use: `yarn dev`
4. For production use: `yarn build` and `yarn start` 

NOTE: To develop using the strapi admin panel you must,

- Set up Postgres Database **locally**
  1. Have [Postgres](https://www.postgresql.org/docs/current/tutorial-install.html) installed and running on local machine. 
  2. Create your Postgres user
  3. [Create a database](https://www.postgresql.org/docs/current/tutorial-createdb.html) named `strapi`


- **locally** change your `config/database.js` 
```js
const parse = require('pg-connection-string').parse;
const config = parse("postgres://postgres@127.0.0.1:5432/strapi");

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



## Frontend Development
- Frontend is handled in the [saf-site frontend repository](https://github.com/mitre/saf-site) 

## Technology Stack

- [Strapi](https://strapi.io/)
- [Postgres](https://www.postgresql.org/)

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
