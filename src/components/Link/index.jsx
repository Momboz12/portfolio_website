import './Link.css'
import { Link } from 'react-router-dom'

export default function Linq({link, children, icon, alter, firstImgae, ImageSize}){
    return(

        <Link to={link} target="_blank" rel="noopener noreferrer" className="link ">
            <img src={icon} alt={alter} className="icon" width={ImageSize.width} height={ImageSize.height}/>
            <p className="p-line" translate="no">
                {children}
            </p>
        </Link>
    )
}