import './AppPreview.css'

export default function AppPreview() {
  return (
    <div className="preview-wrapper" data-reveal>
      <img
        src="/iphone-mockup.png"
        alt="VocabTrack App Vorschau"
        className="preview-image"
      />
    </div>
  )
}
