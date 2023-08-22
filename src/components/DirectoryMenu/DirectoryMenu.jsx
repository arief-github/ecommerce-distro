import './DirectoryMenu.styles.scss';
import { MenuItem } from "../MenuItem/MenuItem.jsx";
import {homepageData} from "../../data/homePageData.js";

export const DirectoryMenu = () => {
    return (
        <div className="directory-menu">
            {
                homepageData.map(({ title, id , imageSrc, size }) => (
                    <MenuItem key={id} title={title} id={id} imageUrl={imageSrc} size={size} />
                ))
            }
        </div>
    )
}