var posts=["2025/07/13/hello-world/","2025/07/13/你好，世界/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };