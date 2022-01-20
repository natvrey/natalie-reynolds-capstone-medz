const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuid } = require("uuid");

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

router.post("/", (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.birthday ||
    !req.body.conditions ||
    !req.body.medications ||
    !req.body.allergies ||
    !req.body.contacts
  ) {
    return res
      .status(400)
      .send(
        "Please make sure to include your first & last name, DOB, conditions, medications,allergies and emergency contact(s)"
      );
  }

  const newProfile = {
    photo: "/images/avatar-placeholder-medz.png",
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    birthday: req.body.birthday,
    bloodType: req.body.bloodType,
    height: req.body.height,
    weight: req.body.weight,
    conditions: req.body.conditions,
    medications: req.body.medications,
    allergies: req.body.allergies,
    doctor: req.body.doctor,
    contacts: req.body.contacts,
    notes: req.body.notes,
    timestamp: Date.now(),
    id: uuid(),
  };

  const profilesData = readFile();
  profilesData.push(newProfile);
  writeFile(profilesData);

  return res.status(201).json(newProfile);
});

router.delete("/:id", (req, res) => {
  let profilesData = readFile();
  const foundProfile = profilesData.find(
    (profile) => profile.id === req.params.id
  );

  if (!foundProfile) {
    return res.status(404).send("Profile not found");
  }

  profilesData = profilesData.filter(
    (profile) => profile.id !== foundProfile.id
  );
  writeFile(profilesData);

  res.status(204).send();
});

module.exports = router;
