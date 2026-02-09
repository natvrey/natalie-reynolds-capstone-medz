const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const { v4: uuid } = require("uuid");

const uploadDir = path.join(__dirname, "..", "public", "images");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    cb(null, `profile-${uuid()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /^image\/(jpeg|jpg|png|gif|webp)$/;
    if (allowed.test(file.mimetype)) return cb(null, true);
    cb(new Error("Only image files (jpeg, png, gif, webp) are allowed."));
  },
});

const readFile = () => {
  const profilesData = fs.readFileSync("./data/profiles.json");

  return JSON.parse(profilesData);
};

const writeFile = (profilesData) => {
  fs.writeFileSync(
    "./data/profiles.json",
    JSON.stringify(profilesData, null, 2)
  );
};

router.get("/", (req, res) => {
  let profilesData = readFile();

  let newProfilesData = [...profilesData];

  newProfilesData = newProfilesData.map((newProfile) => {
    const {
      middleName,
      lastName,
      gender,
      birthday,
      bloodType,
      height,
      weight,
      conditions,
      medications,
      allergies,
      doctor,
      contacts,
      notes,
      timestamp,

      ...listProfilesKeys
    } = newProfile;
    return listProfilesKeys;
  });

  return res.status(200).send(newProfilesData);
});

router.get("/:id", (req, res) => {
  const profilesData = readFile();
  const profile = profilesData.find((profile) => profile.id === req.params.id);

  if (!profile) {
    return res.status(404).send("Profile not found");
  }

  return res.status(200).json(profile);
});

router.post("/", (req, res, next) => {
  upload.single("photo")(req, res, (err) => {
    if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "Image must be 5MB or smaller." });
    }
    if (err) {
      return res.status(400).json({ message: err.message || "Invalid file." });
    }
    next();
  });
}, (req, res) => {
  const body = req.body;
  if (
    !body.firstName ||
    !body.lastName ||
    !body.birthday ||
    !body.conditions ||
    !body.medications ||
    !body.allergies ||
    !body.contacts
  ) {
    return res
      .status(400)
      .send(
        "Please make sure to include your first & last name, DOB, conditions, medications, allergies and emergency contact(s)"
      );
  }

  const photoPath = req.file
    ? "/images/" + req.file.filename
    : "/images/avatar-placeholder-medz.png";

  const newProfile = {
    photo: photoPath,
    firstName: body.firstName,
    middleName: body.middleName || "",
    lastName: body.lastName,
    gender: body.gender || "",
    birthday: body.birthday,
    bloodType: body.bloodType || "",
    height: body.height || "",
    weight: body.weight || "",
    conditions: body.conditions,
    medications: body.medications,
    allergies: body.allergies,
    doctor: body.doctor || "",
    contacts: body.contacts,
    notes: body.notes || "",
    timestamp: Date.now(),
    id: uuid(),
  };

  const profilesData = readFile();
  profilesData.push(newProfile);
  writeFile(profilesData);

  return res.status(201).json(newProfile);
});

router.put("/:id", (req, res, next) => {
  upload.single("photo")(req, res, (err) => {
    if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "Image must be 5MB or smaller." });
    }
    if (err) {
      return res.status(400).json({ message: err.message || "Invalid file." });
    }
    next();
  });
}, (req, res) => {
  const profilesData = readFile();
  const index = profilesData.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).send("Profile not found");
  }

  const body = req.body;
  if (
    !body.firstName ||
    !body.lastName ||
    !body.birthday ||
    !body.conditions ||
    !body.medications ||
    !body.allergies ||
    !body.contacts
  ) {
    return res
      .status(400)
      .send(
        "Please make sure to include your first & last name, DOB, conditions, medications, allergies and emergency contact(s)"
      );
  }

  const existing = profilesData[index];
  let photoPath = existing.photo || "/images/avatar-placeholder-medz.png";
  if (req.file) {
    if (existing.photo && existing.photo.startsWith("/images/profile-")) {
      const oldPath = path.join(uploadDir, path.basename(existing.photo));
      if (fs.existsSync(oldPath)) {
        try {
          fs.unlinkSync(oldPath);
        } catch (e) {
          console.error("Failed to delete old profile image:", e);
        }
      }
    }
    photoPath = "/images/" + req.file.filename;
  }

  const updated = {
    ...existing,
    photo: photoPath,
    firstName: body.firstName,
    middleName: body.middleName || "",
    lastName: body.lastName,
    gender: body.gender || "",
    birthday: body.birthday,
    bloodType: body.bloodType || "",
    height: body.height || "",
    weight: body.weight || "",
    conditions: body.conditions,
    medications: body.medications,
    allergies: body.allergies,
    doctor: body.doctor || "",
    contacts: body.contacts,
    notes: body.notes || "",
    timestamp: Date.now(),
  };

  profilesData[index] = updated;
  writeFile(profilesData);
  return res.status(200).json(updated);
});

router.delete("/:id", (req, res) => {
  let profilesData = readFile();
  const foundProfile = profilesData.find(
    (profile) => profile.id === req.params.id
  );

  if (!foundProfile) {
    return res.status(404).send("Profile not found");
  }

  if (foundProfile.photo && foundProfile.photo.startsWith("/images/profile-")) {
    const filePath = path.join(uploadDir, path.basename(foundProfile.photo));
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        console.error("Failed to delete profile image:", e);
      }
    }
  }

  profilesData = profilesData.filter(
    (profile) => profile.id !== foundProfile.id
  );
  writeFile(profilesData);

  res.status(204).send();
});

module.exports = router;
