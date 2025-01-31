const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/candidates', upload.single('resume'), candidateController.addCandidate);
router.get('/candidates', candidateController.getCandidates);
router.put('/candidates/:id/status', candidateController.updateStatus);

module.exports = router;