cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.msopentech.indexedDB/www/IndexedDBShim.min.js",
        "id": "com.msopentech.indexedDB.IndexedDBShim",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.msopentech.indexedDB": "0.1.1",
    "com.msopentech.websql": "0.0.7",
    "org.apache.cordova.dialogs": "0.3.0"
}
// BOTTOM OF METADATA
});