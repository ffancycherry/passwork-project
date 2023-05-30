//рабочий варинт дерва папока, в теории должен брать информацию из bdFirst и bdSecond

import * as React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';



export default function Folders({nodes}) {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(nodes)}
    </TreeView>
  );
}
