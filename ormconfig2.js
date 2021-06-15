module.exports = {
  type: "postgres",
  synchronize: false,
  logging: true,
  entities: [`${__dirname}/**/entities/*{.ts,.js}`],
  migrations: [`${__dirname}/**/migration/*.ts`],
  url: process.env.DATABASE_URL,
  cli: {
    migrationsDir: 'src/migration'
  }
}