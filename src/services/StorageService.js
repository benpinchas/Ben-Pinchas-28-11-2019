function store(key, any) {
   localStorage[key] = JSON.stringify(any);
}

function load(key) {
      var str = localStorage[key] || 'null';
      let value = JSON.parse(str);
      return value
}

export default {
   store,
   load
}
