import { useState } from 'react'
import '../App.css'

function LikeButton({likeIniziali}){

const [like, setLike] = useState(likeIniziali)
const [isLiked, setIsLiked] = useState(false)

return(
      <button onClick={() => {setLike(isLiked ? like - 1 : like + 1); setIsLiked(!isLiked)}}>
        {isLiked ? "♥" : "♡"} {like}
    </button>
)

}

export default LikeButton
