import instances from ".";

//Lấy toàn bộ product trên api về
export const get_all_carts = async () => {
  return instances.get("carts");
};
export const get_cart_by_proid = async (id) => {
  return instances.get("carts?pro_id=" + id);
};

// Thêm mới 1 product
export const post_new_carts = async (newCart) => {
  return instances.post("carts", newCart);
};

//Sửa 1 product
export const put_cart = async (updatecart) => {
  return instances.put("carts/" + updatecart.id, updatecart);
};

//delete 1 product
export const delete_cart = async (idDelete) => {
  return instances.delete("carts/" + idDelete);
};
