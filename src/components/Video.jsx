import React, { useEffect, useState } from "react"
import { isLocalDev, md5, attemptLogin, debounce, getServerURL,isDesktopApp,ExHost,PostJSON } from "../Utils"


export default React.memo(function Video(props) {
    console.log(props)
    var img_tag = new Image()
    let date = new Date().getTime()
    let previewEndpoint
    let imageRefreshRate = 700 //in milliseconds
    let videoTimer
    useEffect(() => {
        videoTimer = setInterval(() => {
            previewEndpoint = props.previewImageRoute + "?t=" + date++

            if (isDesktopApp && ExHost != "" ) {
                // could be remote app
                previewEndpoint = ExHost+props.previewImageRoute + "?t=" + date++
            }


            img_tag.onload = function () {
                document.getElementById(
                    "video-preview"
                ).style.backgroundImage = `url(${previewEndpoint})`
            }
            img_tag.src = previewEndpoint

            return () => {
                clearInterval(videoTimer)
            }
        }, imageRefreshRate)

        return () => {
            //cleanup runs on unmount
            clearInterval(videoTimer)
        }
    }, [])

    return <div id="video-preview" className="video"></div>
})
