#!/bin/sh
set -e

# Wait for database to be ready
# echo "Waiting for database to be ready..."
# max_tries=30
# count=0
# until pnpm dlx prisma migrate status > /dev/null 2>&1; do
#     count=$((count + 1))
#     if [ $count -gt $max_tries ]; then
#         echo "Unable to connect to database after $max_tries attempts. Exiting."
#         exit 1
#     fi
#     echo "Database not ready. Retrying in 5 seconds... (Attempt $count/$max_tries)"
#     sleep 5
# done

# echo "Database is ready!"

# Delete migrations folder
# echo "Deleting migrations folder..."
# rm -rf /app/prisma/migrations

# # Create a new migration folder
# echo "Creating a new migration folder..."
# mkdir -p prisma/migrations/0_init

# # Diff the schema
# echo "Diffing the schema..."
# pnpm dlx prisma migrate diff \
# --from-empty \
# --to-schema-datamodel prisma/schema.prisma \
# --script > prisma/migrations/0_init/migration.sql

# # Run database migrations
# echo "Running database migrations..."
# # pnpm dlx prisma migrate deploy
# pnpm dlx prisma migrate resolve --applied 0_init

# # Generate Prisma Client
# echo "Generating Prisma Client..."
# pnpm dlx prisma generate

# # Seed the database
# echo "Seeding the database..."
# pnpm dlx prisma db seed --preview-feature


# echo "Checking the status of the Prisma deployment..."
# pnpm dlx prisma migrate status

# Start the application
echo "Starting the application..."
pnpm start
