-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productid_fkey" FOREIGN KEY ("productid") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
