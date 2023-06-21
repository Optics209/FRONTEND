import * as React from 'https://esm.sh/react@18.2.0';
import * as ReactDOM from 'https://esm.sh/react-dom@18.2.0';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};


const defaultContent = `
![My Welcome Image](https://th.bing.com/th/id/OIP.0AnkEFW0bDeZGRP5UT5Z7AAAAA?pid=ImgDet&rs=1)

# Hey Newbie, 
## This is a freecodecamp project by NOKA

\`<div> Clear everything and type anything you want...</div>\`

\`\`\`
const createSomeContent = (content) => {
  <textarea value={content}/>
}
\`\`\`

**Are you bold enough to try this??? **

[@freecodecamp](https://www.freecodecamp.org/learn)

> Try it Now

- Good luck
-  Adios
`


const Editor = ({content, handleTextareaChange}) => <textarea id="editor" value={content} onChange={handleTextareaChange} />


const Previewer = ({content}) => (
  <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}
  />
);


const App = () => {
  const [content, setContent] = React.useState(defaultContent)
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }
  return (
  <div className="main">
    <Editor content={content} handleTextareaChange={handleTextareaChange} />
    <Previewer content={content} />
  </div>
  )
}


ReactDOM.render(<App />, document.querySelector("#app"))