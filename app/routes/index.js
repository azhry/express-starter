import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer();

// implement healthcheck here
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

const agamaController = require('../controllers').agama;

router.get('/agama', agamaController.list);
router.post('/agama', upload.none(), agamaController.add);

module.exports = router;