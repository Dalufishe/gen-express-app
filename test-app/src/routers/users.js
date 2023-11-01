import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send([
    { name: "tj", title: "the man who created Express.js", github: "https://github.com/tj" },
    { name: "Dalufishe", title: "haha! this is me", github: "https://github.com/Dalufishe" },
  ]);
});

export default router;
