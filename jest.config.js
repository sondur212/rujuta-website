module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  moduleNameMapper: {
    '^.+\\.(jpg|ico|jpeg|png|svg|gif|pdf|mp4|css|less|scss)$': 'babel-jest',
  },
};
