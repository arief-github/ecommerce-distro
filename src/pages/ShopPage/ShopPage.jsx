import SHOP_DATA from "../../data/shopPageData.js";
import {CollectionPreview} from "../../components/CollectionPreview/CollectionPreview.jsx";
import {Link} from "react-router-dom";

const ShopPage = () => {
    return (
        <>
            <Link to="/" style={{ display: 'flex', justifyContent: 'end', textDecoration: 'none' }} >
                <span>👈👈 BACK TO HOMEPAGE</span>
            </Link>
            <div className="shop-data">
                {
                    SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        </>
    )
}

export default ShopPage