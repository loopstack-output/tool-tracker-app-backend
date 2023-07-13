import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'loopstack-demo-database.cjziamglak6t.eu-central-1.rds.amazonaws.com',
  port: 3306,
  username: 'loopstack',
  password: 'epcnpa9brfJPA4rma',
  database: 'tool-tracking-demo',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
