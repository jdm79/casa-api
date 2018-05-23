const createParanoidColumns = require('./createParanoidColumns')
const createTimestampColumns = require('./createTimestampColumns')

module.exports = (fields, options) => {
  const paranoidColumns = options.paranoid
    ? createParanoidColumns()
    : {}
  const timestampColumns = options.timestamps
    ? createTimestampColumns()
    : {}
  return Object.assign({}, fields, paranoidColumns, timestampColumns)
}
