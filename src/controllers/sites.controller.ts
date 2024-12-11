import { Request } from "../types/request.types"
import { Response } from "express"
import {} from "firebase-admin/"
import { db } from "../utility/startServer"
import { StatusCodes } from "http-status-codes"

export const updateSiteStatusController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params
  const { status } = req.body

  const docRef = db.collection("Places").doc(id)

  await docRef.update({
    status: true,
  })

  return res.json(StatusCodes.OK).json({
    message: `Status of document with ID '${id}' updated to ${status}.`,
    success: true,
  })
}

export const deleteSiteController = async (req: Request, res: Response) => {
  const { id } = req.params

  const docRef = db.collection("Places").doc(id)

  await docRef.delete()

  return res.json(StatusCodes.OK).json({
    message: `Document with ID '${id}' has been deleted successfully.`,
    success: true,
  })
}
