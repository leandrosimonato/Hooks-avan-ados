import { PostObject } from "./Post"

interface SidebarProps {
  post: PostObject
}

function Sidebar (props: SidebarProps) {
  return <div>
    <p>
      O post do moment é {props.post.title}
    </p>
  </div>
}



export default Sidebar