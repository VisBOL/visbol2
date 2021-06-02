import { useEffect, useState } from 'react';
import Renderer from 'visbol-react';
import { prepareDisplay } from 'visbol';

export default function Visualize(props) {
   const [preparedDisplay, setPreparedDisplay] = useState(undefined);
   useEffect(() => {
      if (props.displayList) {
         try {
            setPreparedDisplay(prepareDisplay(props.displayList));
         }
         catch {
            setPreparedDisplay(undefined);
         }
      }
   }, [props.displayList])
   return (
      <div>
         <input type="file" className="fileinput" onChange={(e) => props.readFile(e)} />
         {preparedDisplay && <Renderer display={preparedDisplay} />}
      </div>
   )
}