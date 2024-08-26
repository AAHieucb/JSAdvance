const redis = require("./connections/init.redis");

async function playVideo(videoId, userId){
  // await redis.incrby(`video::${videoId}`, 1);
  // console.log(await redis.get(`video::${videoId}`));

  try{
    const keyVideo = `video::${videoId}`;
    const keyUserId = `user::${userId}`;

    // Nếu k tồn tại, thì set giá trị expire sau 10s. Mỗi 10s user request sẽ cộng 1 view
    const isOk = await redis.set(keyUserId, "hits", "NX", "EX", 10);
    console.log(`isOk::`, isOk);

    if(isOk === "OK") {
      await redis.incrby(`video::${videoId}`, 1);
      console.log(await redis.get(`video::${videoId}`));
    }
  } catch(err){
    console.error(`Error: playVideo::`, err);
  }
}

playVideo(10001, 101);

