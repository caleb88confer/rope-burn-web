function VideoDemo (props) {
    return (
        <div className="video-demo-main">
            <div className="video-container">

            <iframe width="560" height="315" src="https://www.youtube.com/embed/2tHxDaFlBH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video-demo-text-container">
                <p className="video-demo-text">
                  Easy to use distortion plugin that works with Ableton Live, Logic Pro X, GarageBand, and any other DAW that uses VST3 or AU plugins. Three simple controls that give you a tonal control from light harmonic coloring to ripping loud fuzzed out sounds. 
                </p>
            </div>
        </div>

    )
}

export default VideoDemo;