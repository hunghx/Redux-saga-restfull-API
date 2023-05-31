

export default function Products() {

  return (
    <div className="row p-3">
      
        <div className="col-3 col-md-3">
          <div className="card">
            <img src="url" className="card-img-top" alt="alt"/>
            <div className="card-body">
              <h5 className="card-title">name</h5>
              <p className="card-text">description</p>
              <p>100 $</p>
              <button
                className="btn btn-danger"
          
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
}
