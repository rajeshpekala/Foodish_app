import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({items}) => {
 const dispatch = useDispatch();   
 
    const handleAddItem = (item) => {
      dispatch(addItem(item));
      notify(item.card.info.name);
 };

 const notify = (itemName) => 
 { toast.success(itemName + " added to cart", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }); }
  //console.log("Itejelkjlks",items );
    return(
<div>
    {items.map((item)=> (
        <div key = {item.card.info.id}
        className = "p-2 m-2 border border-gray-400 border-b-3 bg-gray-200 rounded-lg text-left flex">
       <div className = "m-2">{item.card.info.itemAttribute.vegClassifier === "VEG" ? "🟢" : "🔴" }</div>
          <div className="w-9/12">
            <div className = "py-2">
            
            <span className="font-bold">{item.card.info.name}</span>
            <span>-₹{
                item.card.info.price?
            item.card.info.price/100:
            item.card.info.defaultPrice/100}</span>
            </div>
           
          
            <p className = "text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 sm:p-4">
                <div className="absolute">
                    <button className ="p-1 bg-black text-white font-bold rounded-lg"
                    onClick={()=> {handleAddItem(item)}}
                    >
                  Add+</button>
                  <ToastContainer />
                </div>
             <img src = {CDN_URL + item.card.info.imageId } className="w:full"/>
         </div>
        
        </div>
    )

    )}
</div>
    );
}

export default ItemList;