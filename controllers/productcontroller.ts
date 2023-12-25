import express, { Request, Response } from "express";
import { Product } from "../interfaces/productinterface";
import { getDataStore, addItem } from "../datastores/datastore";

const router = express.Router();

//This endpoint will create a new data inside the in memory datastore(array)
router.post("/", (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  addItem(newProduct);
  res.status(201).json(newProduct);
});

//This endpoint will get all the  documents from the datastore
router.get("/getallproducts", (req: Request, res: Response) => {
  res.status(200).json(getDataStore());
});

//This end point will return a document with a particular id
router.get("/getproductbyid/:productid", (req: Request, res: Response) => {
  let productid = Number(req.params.productid);
  const products = getDataStore();
  const product = products.find((product) => product.id === productid);
  if (!product) {
    return res.status(400).send({ message: "product not found" });
  }
  return res.status(200).json(product);
});

// This endpoint will update a particular document by its id
router.put("/updateproductbyid", (req: Request, res: Response) => {
  let productid = Number(req.body.productid);
  const updatedFields = req.body;
  const products = getDataStore();
  const producttoupdate = products.findIndex(
    (product) => product.id == productid
  );
  products[producttoupdate] = {
    ...products[producttoupdate],
    ...updatedFields,
  };
  return res.status(200).json(products[producttoupdate]);
});

//This endpoint will delete a document by its id
router.delete("/deleteproductid/:productid", (req: Request, res: Response) => {
  let productid = Number(req.params.productid);
  const products = getDataStore();
  const producttoupdate = products.findIndex(
    (product) => product.id == productid
  );
  products.splice(producttoupdate, 1);
  return res.status(200).send({ message: "product deleted successfully" });
});

export default router;
