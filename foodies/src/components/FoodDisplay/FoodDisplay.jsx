import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category,searchText}) => {

    const { foodList } = useContext(StoreContext);
    const filteredFoods=foodList.filter(food=>(
        (category==='All' || food.category===category) &&
        food.name.toLowerCase().includes(searchText.toLowerCase())
    ));

    return (
        <div className="container">
            <div className="row">
                {filteredFoods.length > 0 ? (
                   filteredFoods.map((food,index)=>(
                    <FoodItem 
                    key={index} 
                    name={food.name} 
                    description={food.description} 
                    id={food.id}
                    imageUrl={food.imageUrl}
                    price={food.price} />
                   ))
                ) : (
                    <div className="text-center mt-4">
                        <h4>No food found.</h4>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FoodDisplay;

// import React from 'react'
// import { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'

// const FoodDisplay = () => {
//     return (

//     const { foodList } = useContext(StoreContext);

//     <div classNameName="container">
//         <div classNameName="row">
//             {foodList.length > 0 ? (
//                 <div classNameName="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">


//                     <div className="card" style={{"max-width": "320px"}}>
//                         <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" className="card-img-top" alt="Product Image" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Red Nike</h5>
//                                 <p className="card-text">Short product description goes here.</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <span className="h5 mb-0">$99.99</span>
//                                     <div>
//                                         <i className="bi bi-star-fill text-warning"></i>
//                                         <i className="bi bi-star-fill text-warning"></i>
//                                         <i className="bi bi-star-fill text-warning"></i>
//                                         <i className="bi bi-star-fill text-warning"></i>
//                                         <i className="bi bi-star-half text-warning"></i>
//                                         <small className="text-muted">(4.5)</small>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="card-footer d-flex justify-content-between bg-light">
//                                 <button className="btn btn-primary btn-sm">Add to Cart</button>
//                                 <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-heart"></i></button>
//                             </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div classNameName="text-center mt-4" >
//                     <h4> No food found. </h4>
//                 </div>

//             )}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay;