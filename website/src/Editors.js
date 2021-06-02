import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import 'ace-builds/src-min-noconflict/ext-searchbox';
import EditorHeader from './EditorHeader';
import { useState } from 'react';

export default function Editors(props) {
   const [current, setCurrent] = useState("SBOL");
   return (
      <div>
         <div className="editorheaders">
            <EditorHeader name={"SBOL"} current={current} setCurrent={setCurrent} />
            <EditorHeader name={"Display List"} current={current} setCurrent={setCurrent} />
         </div>
         {current === "SBOL" && <div className="editorcontainer">
            <AceEditor
               mode="xml"
               theme="github"
               name="aceeditor"
               width="600px"
               height="100%"
               editorProps={{ $blockScrolling: true }}
               value={props.sbol}
               onChange={(newValue) => props.setSbol(newValue)}
            />
         </div>}
         {current === "Display List" && <div className="editorcontainer">
            <AceEditor
               mode="javascript"
               theme="github"
               name="aceeditor"
               width="600px"
               height="100%"
               editorProps={{ $blockScrolling: true }}
               value={JSON.stringify(props.displayList, null, 2)}
               onChange={(newValue) => props.setDisplayList(JSON.parse(newValue))}
            />
         </div>}
      </div>
   );
}