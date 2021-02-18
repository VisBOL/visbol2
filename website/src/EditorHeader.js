export default function EditorHeader(props) {
   return (
      <div className={props.current === props.name ? "editorheader editorheaderselected" : "editorheader" }
      onClick={() => props.setCurrent(props.name)}>{props.name}</div>
   );
}