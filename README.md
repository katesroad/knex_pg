# Operating PostgreSQL with Knex

Notes of PostgreSQL and Knex: https://trello.com/b/XZiTfgYe/postgresql

## Packages used
- knex

  A javascript libraray used to insert data into PostgreSQL.

## documents
http://www.silota.com/docs/recipes/sql-postgres-json-data-types.html
## Some common used solutions in Knex

- Insert data with relations: https://github.com/knex/knex/issues/251

- Create table: https://stackoverflow.com/questions/35089571/knex-js-create-table-and-insert-data

- Query jsonb in PosgreSQL:
  - https://github.com/knex/knex/issues/569
  - https://stackoverflow.com/questions/44428665/knexjs-pgsql-json-query
  - https://dba.stackexchange.com/questions/127689/how-to-get-particular-object-from-jsonb-array-in-postgresql
  
- Transaction using Knex

The query result for two sessions may vary for two sessions without using transaction.
  http://knexjs.org/#Transactions
  
  
 - view: 
   Knex supports querying views just like querying tables
   
 - How to improve the performance of count rows:
 https://stackoverflow.com/questions/44299307/how-to-improve-the-performance-of-counting-all-rows
   

## quick checksheet
- Knex：https://devhints.io/knex

## Concepts in PostgreSQL

- Index in PostgreSQL: https://www.postgresqltutorial.com/postgresql-indexes/postgresql-index-types/
- Why you need to use transaction: https://www.postgresqltutorial.com/postgresql-transaction/
- Materialized view
   - store data pysically for performance enhancement
   - you need to refresh materialized view: https://stackoverflow.com/questions/23906977/refresh-a-materialized-view-automatically-using-a-rule-or-notify




