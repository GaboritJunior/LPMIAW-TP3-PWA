self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("my-cache").then(function (cache) {
            return cache.add("index.html");
        })
    );
});


self.addEventListener("fetch", function (event) {
    console.log("Fetch request for:", event.request.url);
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match("index.html");
        })
    );
});
