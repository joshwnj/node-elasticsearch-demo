const es = require('elasticsearch')

// return a new elasticsearch client
module.exports = function (config) {
  if (!config) { config = {} }

  const defaults = {
    host: process.env.ELASTICSEARCH_HOST || '127.0.0.1:9200',
    log: 'error'
  }

  return new es.Client(Object.assign({}, defaults, config))
}
