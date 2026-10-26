import { visit } from 'unist-util-visit'

type TreeNode = {
  type: string
}

type CodeNode = {
  type: 'code'
  lang?: string
  value?: string
}

type ParentNode = {
  children: Array<Record<string, unknown>>
}

export default function remarkMermaid() {
  return (tree: TreeNode) => {
    visit(tree, 'code', (node: CodeNode, index: number | undefined, parent: ParentNode | undefined) => {
      if (!parent || index === undefined || node.lang !== 'mermaid' || !node.value) {
        return
      }

      parent.children[index] = {
        type: 'containerComponent',
        name: 'mermaid-diagram',
        attributes: {
          code: encodeURIComponent(node.value)
        },
        children: []
      }
    })
  }
}
