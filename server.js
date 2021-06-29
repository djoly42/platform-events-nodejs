var jsforce = require('jsforce');
var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://test.salesforce.com'
});

conn.login('*****', '*****', function(err, res) {
    if (err) { return console.error(err); }
    conn.streaming.topic("/event/Action_event__e").subscribe(function(message) {
      console.dir(message);
      //message.sobject.Connection
    });
});