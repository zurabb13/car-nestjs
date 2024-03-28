import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CarsModule } from './cars/cars.module';

const corsOptions = {
  origin: [
    'https://grumpy-baseball-cap-colt.cyclic.app/',
    'https://studio.apollographql.com',
  ],
  // Add other allowed origins as needed
  credentials: true, // Allow cookies for authentication purposes
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed HTTP methods
  allowedHeaders:
    'Content-Type, Accept, Authorization, Origin, X-Requested-With', // Allowed headers
};

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGO),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: 'src/schema.gql',
        playground: true,
        cors: corsOptions,
      }),
    }),
    CarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
