module.exports = {
  preset: "ts-jest", 
  testEnvironment: "jest-environment-jsdom", 
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      useESM: false, 
    },
  },
};
