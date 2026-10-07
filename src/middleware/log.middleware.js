const logMiddleware = (req,res,next) => {
    console.log("Hallo Saya Middleware")
//"FKIR"
    next()
}
export default logMiddleware
