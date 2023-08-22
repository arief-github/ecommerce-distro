import SHOP_DATA from "../../data/shopPageData.js";
import {CollectionPreview} from "../../components/CollectionPreview/CollectionPreview.jsx";

const ShopPage = () => {
    return (
        <div className="shop-data">
            {
                SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

export default ShopPage