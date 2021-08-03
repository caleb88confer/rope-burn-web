import {Link} from "react-router-dom";

function Download (props) {
    return (
        <div>
            <h1>Download</h1>
            <a href="public/plugins/RopeBurn.zip" download>Rope Burn Download</a>
            <br />
            <a href="public/images/Screen Shot 2021-07-24 at 3.13.18 PM.png" download>picture</a>
            <br />
            <Link to="/Users/calebconfer/Desktop/rope burn distortion/rope-burn-web/public/images/Screen Shot 2021-07-24 at 3.13.18 PM.png" target="_blank" download>Picture download</Link>
        </div>

    )
}

export default Download;