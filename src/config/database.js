module.exports = {
  dialect: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'admin123',
  database: 'brazil-laws-api',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
