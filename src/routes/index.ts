import express from "express"
import { authRouter } from "./auth.route"
import { sitesRouter } from "./sites.route"
import { otpRouter } from "./otp.route"

const rootRouter = express.Router()

rootRouter.use("/auth", authRouter)
rootRouter.use("/otp", otpRouter)
rootRouter.use("/sites", sitesRouter)

export { rootRouter }
