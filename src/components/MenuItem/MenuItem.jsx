import './MenuItem.styles.scss';

export const MenuItem = ({ id, title, imageUrl, size }) => {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={` ${size ? size : ""} menu-item`} key={id}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    )
}