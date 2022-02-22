module.exports = (req, res, next) => {
    console.log()
    console.log(`Passando pelo middlewares`)
    console.log()
    next()
}