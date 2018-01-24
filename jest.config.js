module.exports = {
  setupFiles: ['../jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageDirectory: '../coverage',
  verbose: true,
  rootDir: 'src',
  setupTestFrameworkScriptFile: '../node_modules/jest-enzyme/lib/index.js'
}
