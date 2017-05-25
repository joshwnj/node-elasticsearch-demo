# node-elasticsearch-demo

Boilerplate for "I just want to try some stuff with elasticsearch".

## configure

If you're running `elasticsearch` on something other than `127.0.0.1:9200`, set an env var:

```
export ELASTICSEARCH_HOST=127.0.0.1:9201
```

## start elasticsearch

You can install `elasticsearch` manually (or with homebrew or something) or run it inside a docker container:

```
docker run -p 9200:9200 \
  -e "http.host=0.0.0.0" \
  -e "transport.host=127.0.0.1" \
  -e "cluster.routing.allocation.disk.watermark.low=2gb" \
  -e "cluster.routing.allocation.disk.watermark.high=1gb" \
  elasticsearch:5.4.0-alpine
```

## acknowledgements

While starting to learn this stuff I found this a very helpful introduction: https://www.sitepoint.com/search-engine-node-elasticsearch/
