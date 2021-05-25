const FILES_TO_CACHE = [
    "/",
    "./index.html",
    "./manifest.webmanifest",
    "./favicon.ico",
    "./src/App.js",
    "./src/index.js",
    "../src/components/NavBar/Navbar.js",
    "../src/components/NavBar/Navbar.css",
    "../src/pages/Landing/landing.js",
    "../src/pages/Landing/landing.css",
    "../src/pages/LoginPage/loginpage.js",
    "../src/pages/LoginPage/loginpage.css",
    "../src/pages/LoginPage/useForm2.js",
    "../src/pages/Meets/createMeet.js",
    "../src/pages/Meets/joinedMeets.js",
    "../src/pages/Meets/meets.css",
    "../src/pages/Meets/Meets.js",
    "../src/pages/Meets/singleMeet.js",
    "../src/pages/Profile/profilePage.js",
    "../src/pages/Profile/profilePage.css",
    "../src/pages/SignupPage/signupPage.css",
    "../src/pages/SignupPage/signupPage.js",
    "../src/pages/SignupPage/useForm.js",
    "../src/pages/Style/assets/logo.png",
    "../src/utils/actions.js",
    "../src/utils/API.js",
    "../src/utils/auth.js",
    "../src/utils/colors.js",
    "../src/utils/GlobalState.js",
    "../src/utils/history.js"
  ];
  const CACHE_NAME = "static-cache-v2";
  const DATA_CACHE_NAME = "data-cache-v1";
  // install
  self.addEventListener("install", function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
    self.skipWaiting();
  });
  self.addEventListener("activate", function(evt) {
    evt.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
    self.clients.claim();
  });
 
  // fetch
  self.addEventListener("fetch", function(evt) {
    // cache successful requests to the API
    if (evt.request.url.includes("/")) {
      evt.respondWith(
        caches.open(DATA_CACHE_NAME).then(cache => {
          return fetch(evt.request)
            .then(response => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }
  
              return response;
            })
            .catch(err => {
              // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
        }).catch(err => console.log(err))
      );
  
      return;
    }
  
    // if the request is not for the API, serve static assets using "offline-first" approach.
    // see https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
    evt.respondWith(
      caches.match(evt.request).then(function(response) {
        return response || fetch(evt.request);
      })
    );
  });
  
  