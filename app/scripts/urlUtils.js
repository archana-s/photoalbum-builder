var fetchFlickrImageUrlFromPhoto = function() {
  var args = Array.prototype.slice.apply(arguments);
  if (!args.length) return false;

  var photo = args[0];
  var type = 'thumbnail';

  if (args.length === 2) {
    type = args[1];
  }

  if (!photo || !typeof photo === 'object') return false;

  if (photo.farm && photo.server && photo.id && photo.secret) {
    var part = 'http://c2.staticflickr.com/' + photo.farm + '/' + photo.server + '/' + photo.id + '_' + photo.secret;
    if (type.toLowerCase() === 'full') {
      return part + '_c.jpg';
    }
    return part + '_s.jpg';
  }

  return false;
};
