# Data process

The script to upload data to postgreSQL

## Packages used
- knex

  A javascript libraray used to insert data into PostgreSQL.

## Some common used solutions in Knex

- Insert data with relations: https://github.com/knex/knex/issues/251
- Create table: https://stackoverflow.com/questions/35089571/knex-js-create-table-and-insert-data
- Query jsonb in PosgreSQL:
  - https://github.com/knex/knex/issues/569
  - https://stackoverflow.com/questions/44428665/knexjs-pgsql-json-query
- Transaction using Knex
  http://knexjs.org/#Transactions
 - view: 
   Knex supports querying views just like querying tables
   

## quick checksheet
- Knex：https://devhints.io/knex

## Concepts in PostgreSQL

- Index in PostgreSQL: https://www.postgresqltutorial.com/postgresql-indexes/postgresql-index-types/
- Why you need to use transaction: https://www.postgresqltutorial.com/postgresql-transaction/
- Materialized view
   - store data pysically for performance enhancement
   - you need to refresh materialized view: https://stackoverflow.com/questions/23906977/refresh-a-materialized-view-automatically-using-a-rule-or-notify

The query result for two sessions might be different. 

