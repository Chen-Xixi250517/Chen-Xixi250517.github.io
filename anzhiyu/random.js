var posts=["2025/07/13/你好，世界/","2025/07/16/这是封面图的测试页！/","2025/07/16/这里的第一篇小文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };