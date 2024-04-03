export const draculaThemeConfig = {
  theme: {
    plain: {
      color: "#f8f8f2",
      backgroundColor: "#16181d"
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
          color: "#6272a4",
          fontStyle: "italic"
        }
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7
        }
      },
      {
        types: ["string", "attr-value"],
        style: {
          color: "#977cdc"
        }
      },
      {
        types: ["punctuation", "operator"],
        style: {
          color: "#f8f8f2"
        }
      },
      {
        types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
        style: {
          color: "#50fa7b"
        }
      },
      {
        types: ["atrule", "keyword", "attr-name", "selector"],
        style: {
          color: "#77b7d7"
        }
      },
      {
        types: ["function", "deleted", "tag"],
        style: {
          color: "#86d9ca"
        }
      },
      {
        types: ["function-variable"],
        style: {
          color: "#bd93f9"
        }
      },
      {
        types: ["tag", "selector", "keyword"],
        style: {
          color: "#77b7d7"
        }
      }
    ]
  }
};
