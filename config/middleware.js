module.exports.setFlash = function(req, res, next){
    res.locas.flash = {
        'success': req.flash('success'),
        'error': req.flash('error')
    }

    next();
}