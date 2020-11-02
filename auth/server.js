
/**
 * This example is using the Authorization Code flow.
 *
 * In root directory run
 *
 *     npm install express
 *
 * then run with the followinng command. If you don't have a client_id and client_secret yet,
 * create an application on Create an application here: https://developer.spotify.com/my-applications to get them.
 * Make sure you whitelist the correct redirectUri in line 26.
 *
 *     node access-token-server.js "<Client ID>" "<Client Secret>"
 *
 *  and visit <http://localhost:8888/login> in your Browser.
 */
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var SpotifyWebApi = require('spotify-web-api-node');


const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];
var client_id = process.env.client_id; // Your client id
var client_secret = process.env.client_secret; // Your secret

const spotifyApi = new SpotifyWebApi({
  redirectUri: 'http://localhost:8888/callback',
  clientId: client_id, // process.argv.slice(2)[0],
  clientSecret:client_secret //process.argv.slice(2)[1]
});

const app = express();

app.get('/login', (req, res) => {
  const state = "some-state"
  const showDialog = true
  const responseType = 'token'
  res.redirect(spotifyApi.createAuthorizeURL(scopes,state,showDialog,responseType));
});

app.get('/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;
 
   res.redirect("http://localhost:3000")
/*  if (error) {
    console.error('Callback Error:', error);
    res.send(`Callback Error: ${error}`);
    return;
  }
 
spotifyApi.authorizationCodeGrant(code).then(
  function(data) {
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);

    // Set the access token on the API object to use it in later calls
  //  spotifyApi.setAccessToken(data.body['access_token']);
   // spotifyApi.setRefreshToken(data.body['refresh_token']);
  },
  function(err) {
    console.log('Something went wrong!', err);
  }
);*/
}

)

app.listen(8888, () =>
  console.log(
    'HTTP Server up. Now go to http://localhost:8888/login in your browser.'
  )
);
