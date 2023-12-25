import express, { Request, Response } from "express";
import { Product } from "../interfaces/productinterface";
import { getDataStore, addItem } from "../datastores/datastore";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  addItem(newProduct);
  res.status(201).json(newProduct);
});

router.get("/getallproducts", (req: Request, res: Response) => {
  res.status(200).json(getDataStore());
});

router.get("/getproductbyid/:productid", (req: Request, res: Response) => {
  let productid = Number(req.params.productid);
  const products = getDataStore();
  const product = products.find((product) => product.id === productid);
  if (!product) {
    return res.status(400).send({ message: "product not found" });
  }
  return res.status(200).json(product);
});

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

router.delete("/deleteproductid/:productid", (req: Request, res: Response) => {
  let productid = Number(req.params.productid);
  const products = getDataStore();
  const producttoupdate = products.findIndex(
    (product) => product.id == productid
  );
  products.splice(producttoupdate, 1);
  console.log("Updated Products Array:", products);
  return res.status(200).send({ message: "product deleted successfully" });
});

export default router;
