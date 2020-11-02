import SpotifyWebApi from "spotify-web-api-node";
var jq = require("jq-web")
//import {setData} from './App'



const parsedUrl = new URL(window.location.href) //total hack, need to use parse);
const token = parsedUrl.hash.split(/\=|\&/)[1] //vsearchParams.get("access_token")
console.log("recieved token: " + token);

var credentials = {
  clientId: 'd1ed7c7a877445848b60538606690cf3',
  clientSecret: 'f6a10d3cbf7d4379bbbe117499b49d19',
  //Either here//expo
  accessToken: token
};

const spotifyApi = new SpotifyWebApi(credentials)
spotifyApi.setAccessToken(token)

let data =
[{
      "title": "1997-07-29",
      "contentTitle": "Land of the Loops",
      "contentText": "Multi-Family Garage Sale (Bargain-Bin Mix)",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02cc977df38fbb06e60062d5c5"
        }
      }
    }]

export  const getData = (callback) => spotifyApi.getMyRecentlyPlayedTracks({
  limit: 20
}).then(res=>{
  // Output items
//  console.log("Your 20 most recently played tracks are:");
  //res.body.items.forEach(item => console.log(item.track));

  const query = '.items[].track|{"contentTitle":getpath(["artists",0,"name"]),"contentText":.name,"media":{"type":"VIDEO","source":{"url":.preview_url}} }'
//  console.log("queryString: " + query)
//  console.log("json response" + JSON.stringify(res.body.items))

 var tracks = jq.json({
    items: res.body.items
  }, query)

callback(tracks)
})
//(async()=>
//data = await getData()
//)
//console.log("tracks: " + JSON.stringify(data))
export default data;
/*
    {
      "title": "1997-07-29",
      "contentTitle": "Land of the Loops",
      "contentText": "Multi-Family Garage Sale (Bargain-Bin Mix)",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02cc977df38fbb06e60062d5c5"
        }
      }
    },
    {
      "title": "2000",
      "contentTitle": "Q And Not U",
      "contentText": "Nine Things Everybody Knows",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e0255f74d4797a6f2f0dd2c7e7f"
        }
      }
    },
    {
      "title": "2002-12-16",
      "contentTitle": "The Band",
      "contentText": "King Harvest - Rehearsal Version",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02415e5ff0f5a631e22af127a6"
        }
      }
    },
    {
      "title": "2003-01-01",
      "contentTitle": "Warren Zevon",
      "contentText": "Iko-Iko - Remastered",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e023404b50ac10bd112a5855e20"
        }
      }
    },
    {
      "title": "2004-05-31",
      "contentTitle": "Animal Collective",
      "contentText": "Winters Love",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e0202ed9d8a9c8d138641861c1b"
        }
      }
    },
    {
      "title": "2008-08-18",
      "contentTitle": "Damon Albarn",
      "contentText": "Heavenly Peach Banquet",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02d7bc7b73206b723794579228"
        }
      }
    },
    {
      "title": "2009-03-23",
      "contentTitle": "Dan Deacon",
      "contentText": "Woof Woof",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02f64fca6c4b8088b1b047ff3f"
        }
      }
    },
    {
      "title": "2010-01-12",
      "contentTitle": "Vampire Weekend",
      "contentText": "Diplomat’s Son",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e0292f4cbe7bb66d3d78cd277cd"
        }
      }
    },
    {
      "title": "2010-06-07",
      "contentTitle": "Ratatat",
      "contentText": "Mandy",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e026395be474d94f6aa8cba536c"
        }
      }
    },
    {
      "title": "2011-09-20",
      "contentTitle": "Nurses",
      "contentText": "Trying To Reach You",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e0268368c2c4f6a21d1eadf47cf"
        }
      }
    },
    {
      "title": "2013-01-01",
      "contentTitle": "salvia palth",
      "contentText": "i was all over her",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e0275398280edcb0278b4516c48"
        }
      }
    },
    {
      "title": "2013-02-12",
      "contentTitle": "STRFKR",
      "contentText": "Isea",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02cb916d1e03610b396f0120f3"
        }
      }
    },
    {
      "title": "2013-10-22",
      "contentTitle": "POLIÇA",
      "contentText": "Tiff",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e0238f8cdcc9df8651b83fe4f7b"
        }
      }
    },
    {
      "title": "2013-10-29",
      "contentTitle": "Son Lux",
      "contentText": "Easy",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e0227837a099f482fb0214f41ea"
        }
      }
    },
    {
      "title": "2014-05-06",
      "contentTitle": "Tune-Yards",
      "contentText": "Water Fountain",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e024212fb03469e877d23a58e19"
        }
      }
    },
    {
      "title": "2015-02-23",
      "contentTitle": "Dan Deacon",
      "contentText": "Feel the Lightning",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02b5f0f447f0b9d080d970b758"
        }
      }
    },
    {
      "title": "2017-08-25",
      "contentTitle": "JR JR",
      "contentText": "Clean Up",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e026a3ff0fb4c39e1715eef2412"
        }
      }
    },
    {
      "title": "2019-05-03",
      "contentTitle": "Vampire Weekend",
      "contentText": "Sunflower (feat. Steve Lacy)",
      "media": {
        "name": "placeholder",
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e02a2b1d3e73c66663c01351bcf"
        }
      }
    },
    {
      "title": "2019-10-04",
      "contentTitle": "Angel Olsen",
      "contentText": "Lark",
      "media": {
        "type": "IMAGE",
        "source": {
          "url": "https://i.scdn.co/image/ab67616d00001e022b31fc8bd33efd1f2f2f23b0"
        }
      }
    }*/