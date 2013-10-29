Package.describe({
   summary: "Pure FrameWork Css Yahoo"
});

Package.on_use(function(api, where){

 api.use(['jquery'], 'client');

 api.add_files('css/pure-min.css', 'client');
}):
