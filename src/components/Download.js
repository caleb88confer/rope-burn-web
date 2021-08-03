

function Download (props) {
    return (
        <div className="download-page">
            <div className="about-section">
                <h3 className="about-section-title">
                    Mac Instructions
                </h3>
                <p className="about-section-text">
                    For use on a Mac, download the zip file, unzip and place the <span className="file">rope-burn-distortion.vst3 </span>file in <span className="path">/Library/Audio/Plug-Ins/VST3</span> also place <span className="file">rope-burn-distortion.component </span><span className="path">/Library/Audio/Plug-Ins/Components</span>. The Vst3 plugin can be used for cross platform applications, the component plugin shows up as an "AU" or Audio Unit plugin, and is typically used for Mac specific software. 
                        
                </p>
            </div>
            <div className="about-section">
            <h3 className="about-section-title">
                    Windows Instructions
                </h3>
                <p className="about-section-text">
                For use on a PC, download the zip file, unzip and place the <span className="file">rope-burn-distortion.vst3 </span>file in <span className="path">C:\Program Files\Common Files\VST3</span>.  
                </p>
            </div>
            
            

            <div className="download-button-container">
            <a 
            className="download-button"
            href="/plugins/RopeBurn.zip" download>Rope Burn Download</a>
            </div>
        </div>

    )
}

export default Download;