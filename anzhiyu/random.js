var posts=["2025/07/13/你好，世界/","2025/07/16/这是封面图的测试页！/","2025/07/16/这里的第一篇小文/","2025/07/17/失去耳机的异世界生活/","2025/07/18/少女死在了前线/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };