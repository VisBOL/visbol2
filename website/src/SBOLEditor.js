import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-github";
import 'ace-builds/src-min-noconflict/ext-searchbox';

export default function SBOLEditor(props) {
   return (
      <div className="sboleditor">
         <input type="file" onChange={(e) => props.readFile(e)}/>
         <div className="editorcontainer">
         <AceEditor
            mode="xml"
            theme="github"
            name="aceeditor"
            width="600px"
            height="100vh"
            editorProps={{ $blockScrolling: true }}
            value={props.sbol}
            onChange={(newValue) => props.setSbol(newValue)}
         />
         </div>
      </div>
   );
}