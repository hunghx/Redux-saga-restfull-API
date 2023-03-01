import instances from ".";

//Lấy toàn bộ product trên api về
export const get_all_products = async () => {
  return instances.get("products");
};
export const get_products_by_status = async () => {
  return instances.get("products?status=true");
};

// Thêm mới 1 product
export const post_new_products = async (newProduct) => {
  return instances.post("products", newProduct);
};

//Sửa 1 product
export const put_product = async (updateProduct) => {
  return instances.put("products/" + updateProduct.id, updateProduct);
};

//delete 1 product
export const delete_product = async (idDelete) => {
  return instances.delete("products/" + idDelete);
};
