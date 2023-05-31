import CartItem from './CartItem'

export default function Cart() {

  return (
    <div>
      <h4>Cart</h4>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>STT</td>
            <td>Name</td>
            <td>IMAGE</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>TotalAmount</td>
            <td colSpan={2}>Action</td>
          </tr>
        <CartItem/>
        </tbody>
      </table>
    </div>
  );
}
