import React from "react";
import { TreeView } from 'devextreme-react/tree-view';
import "./folderss.css"
// import First from "./bdFirst";


// const fold = First;

function Fold({folder}) {
  return (
    <div className="dx-viewport">
      <TreeView id='treeView'
      dataSource={folder}
      dataStructure="plain"
      keyExpr="id"
      displayExpr="fname"
      parentIdExpr="parent_id"
      searchEnabled={true}
      searchMode="startswith"
      
      />
    </div>
  );
}

export default Fold;