export default function config() {
  const isProd = process.env.NODE_ENV === 'production';
  const port = isProd ? 3000 : 3001;
  const mongoUri = isProd
    ? 'app-mongo-prod-svc:27017'
    : 'app-mongo-dev-svc:27017';
  return { app: { port }, mongodb: { uri: mongoUri } };
}
