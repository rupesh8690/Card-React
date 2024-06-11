import "./Product.css"
import Price from "./Price"
function Product({title,idx}){
    // const list= features.map((feature) => <li> {feature}</li>)
   
    // let style= {backgroundColor: price>3000?"yellow":" "}
    
    let oldPrices = ["12,495","11,900","1,599","599"];
    let newPrices = ["8,999","9,199","8,199","278"];
    let description= [["8,000 DPI","5 Programmable Buttons"], ["Intuitive Surface","Desigend for ipad pro"], ["Design for ipad pro","Intuitive Surface"], ["Wireless","Optical Orientation"]];

    return(
        <div className="product" >
            {/* <h3 >{title}</h3>
            <h5>{description}</h5>
            <p>{list}</p>
            { price>3000?<p>"Discount of 5%"</p>:null} */}

            <h4>{title}</h4>
            <p> {description[idx][0]} </p>
            <p> {description[idx][1]} </p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
          
           
        </div>
    )
}

export default Product;