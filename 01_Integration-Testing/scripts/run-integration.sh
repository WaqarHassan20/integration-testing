docker compose up  -d
echo "Waiting for the database to be ready..."
./scripts/wait-for-db.sh "postgresql://postgres:postgres@localhost:5432/postgres"
echo "Database is ready."
bunx prisma migrate dev --name init
bunx prisma generate
bun run test
docker compose down