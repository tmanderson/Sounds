define('buffman', function() {
    var path            = null,
        context         = new webkitAudioContext(),
        bufferGroups    = {},
        filters         = [];

    function request(group, file) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path + file, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = function() {
            context.decodeAudioData(this.response, function(buffer) {
                bufferGroups[group][bufferGroups[group].indexOf(file)] = buffer;
            }, function(e) {
                console.error(e.message);
            });
        };

        xhr.send(null);
    }

    return {
        create: function(p) {
            path = p;
            return this;
        },
        load: function(groups) {
            if(_.isObject(groups)) bufferGroups = groups;
            _.each(groups, function(files, group) {
                _.each(files, _.bind(request, this, group));
            });
            return this;
        },
        play: function(group, index) {
            var src = context.createBufferSource();
            src.buffer = bufferGroups[group][index];
            _.each(filters, function(filter,i) {
                src.connect(filter);
                filter.connect(context.destination)
            });
            src.start(0);
            return this;
        }
    };
});