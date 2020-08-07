const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/sistemas', (req, res) => {
    res.render('sistemas');
});
router.get('/sistemas/win', (req, res) => {
    res.render('sistemas/win');
});



router.get('/sistemas/distro', (req, res) => {
    res.render('sistemas/distro');
});
//Settings
router.get('/navegadores', (req, res) => {
    res.render('navegadores');
});
router.get('/nosotros', (req, res) => {
    res.render('about');
});
module.exports = router;