mulberry = window.mulberry || {};
toura = window.toura || {};

mulberry._Config = {
  "id": "./kyokushindo",
  "locale": "en-us",
  "buildDate": "1391218298",
  "appVersion": "5.0.0",
  "updateUrl": null,
  "versionUrl": null,
  "device": {
    "type": "phone",
    "os": "ios"
  },
  "googleAnalytics": {
    "trackingId": "a_tracking_id"
  },
  "adMob": {
    "publisherId": "a_publisher_id"
  }
};

// force all images to come from S3. this
// is mainly used by MAP for the preview window.
toura.forceLocal = false;
toura.forceStreaming = false;

// skips checking for newer remote version.
// useful for speeding up non-data dev.
toura.skipVersionCheck = false;

toura.features = {
  siblingNav : false,
  ads : false,
  sharing : true,
  favorites : true,
  fontSize : true,
  multiLineChildNodes : false,
  debugPage : true
};

mulberry.features = {
  debugToolbar : false
};

mulberry.environment = 'production';
mulberry.feedProxyUrl = 'https://api.toura.com';


