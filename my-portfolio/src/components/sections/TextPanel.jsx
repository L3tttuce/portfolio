import './TextPanel.css'

function TextPanel({ title, children }) {
  return (
    <div className="text-panel">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default TextPanel;