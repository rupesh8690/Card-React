export default function Price({oldPrice,newPrice}){
    let oldStyle= {
         textDecoration: "line-through"
    };

    let newStyle= {
        fontWeight: "bold"
    }

    let styles={
        backgroundColor: "#e0367f", // Corrected hex color code
        height:"30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }
    return(
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyle}>{newPrice} </span>
            </div>
    )
}