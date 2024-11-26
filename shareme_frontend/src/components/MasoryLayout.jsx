import React, {useState, useEffect} from "react"
import Masory from "react-masonry-css"
import Pin from "./Pin"

const breakpointObj = {
	default : 4,
	3000 : 6,
	2000 : 5,
	1200 : 3,
	1000 : 2,
	500 : 1
}
const MasoryLayout = ({pins}) => {
	return (
<Masory className="flex animate-slide-fwd" breakpointCols = {breakpointObj}>
{pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max"/>)}
</Masory>
	)
}

export default MasoryLayout