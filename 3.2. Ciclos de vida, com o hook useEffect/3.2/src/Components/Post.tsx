import { title } from "process"

export type PostObject = {
  title: string, 
  content: string 
}

interface PostProps {
  post: PostObject;
  totalComments?: number;
}

function Post (props: PostProps) {
  return <div>
    <h1>
      {props.post.title}
    </h1>
    <p>{props.post.content}</p>

  {
    props.totalComments &&

    <span>
      comentários: {props.totalComments}
    </span>

  }

  </div>
}



export default Post