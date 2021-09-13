import { forwardRef, PropsWithChildren, useImperativeHandle, useRef } from "react"

type ScrollableBoxProps = PropsWithChildren<{
  width: number,
  height: number,
}>

export type ScrollableRef = {
  scrollToBotton: () => void,
}


export default forwardRef<ScrollableRef, ScrollableBoxProps>((props, ref) => {
  const currentRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(
    ref,
    () => ({
      scrollToBotton() {
        window.alert('Desceu')
        if (currentRef.current){
          currentRef.current.scrollTop = currentRef.current?.scrollHeight
        }
      }
    }),
    []
  )
  
  return <div
  ref={currentRef}
    style={{
      width: props.width,
      height: props.height,
      overflow: 'auto',
      margin: '24px auto',
      border: '1px solid #ccc'
    }}
  >
    {props.children}
  </div>
})