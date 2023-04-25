const router = require("express").Router();
const Item = require("../models/newITEM");
const verify = require("../vierfiytoken");
const multer = require("multer");
const path = require("path");


const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/All My Projects/Mern-Stack/back-end/prods"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const filter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: filter });

router.post("/add", upload.single("avatar"), verify, (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const age = req.body.age;
  const categorie = req.body.categorie;
  const image = req.file.path;
  const ADDPost = new Item({
    name,
    description,
    age,
    categorie,
    image,
  });
  ADDPost.save()
    .then(() => res.json(true))
    .catch((err) => res.json(err));
});

router.get("/", async (req, res) => {
  const Items = await Item.find();
  res.json(Items);
});

router.delete("/delete/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(() => res.json(true))
    .catch((err) => res.json("cant delete"));
});

router.put("/edit/:id", upload.single("image"), (req, res) => {
  Item.findById(req.params.id)
    .then((post) => {
      (post.name = req.body.name),
        (post.description = req.body.description),
        (post.age = req.body.age),
        (post.categorie = req.body.categorie);
      post.image = req.file.path;
      post
        .save()
        .then(() => res.json(true))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

router.get("/all", async (req, res) => {
  const ALL = await Item.find();
  res.json(ALL);
});

router.get("/get/:query/:parametre", async (req, res) => {
  const post = await Item.findOne({
    name: req.params.query,
    categorie: req.params.parametre,
  });
  res.json(post);
});



module.exports = router;
