
export default function CartItem() {

  return (
    <tr>
      <td>1</td>
      <td>ao</td>
      <td>
        <img width={100} src="anh" alt="anh" />
      </td>
      <td>
        <input
  
          type={"number"}
        />
      </td>
      <td>100$</td>
      <td>1000$</td>
      <td>
        <button className="btn btn-warning" >
          Update
        </button>
      </td>
      <td>
        <button className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
