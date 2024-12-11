import express from "express"
import { validateJWT } from "../middlewares/validateJWT"
import { validateAdmin } from "../middlewares/validateAdmin"
import {
  deleteSiteController,
  updateSiteStatusController,
} from "../controllers/sites.controller"

const sitesRouter = express.Router()

sitesRouter.patch(
  "/status/:id",
  validateJWT,
  validateAdmin,
  updateSiteStatusController
)
sitesRouter.delete("/:id", validateJWT, validateAdmin, deleteSiteController)

export { sitesRouter }
