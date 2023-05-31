
import { useDispatch, useSelector } from "react-redux";
import { post_new_cart } from "../redux/actions/action_cart";


export default function Products() {
  const dispatch = useDispatch();

let list = useSelector(state=>state.listProduct)
  // const [list , setList] = useState([]);
// useEffect(()=>{
//  let products =fildAllProducts();
// products.then(res=>setList(res.data))
// },[])


  return (
    <div className="row p-3">
      {list.map(pro=><div key={pro.id} className="col-3 col-md-3">
          <div className="card">
            <img src={pro.image_url} className="card-img-top" alt={pro.name}/>
            <div className="card-body">
              <h5 className="card-title">{pro.name}</h5>
              <p className="card-text">{pro.description}</p>
              <p>{pro.price} $</p>
              <button
                className="btn btn-danger"
              onClick={()=>dispatch(post_new_cart(pro))}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>)}
        
      
    </div>
  );
}
