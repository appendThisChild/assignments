import React from "react"
import { FacebookShareButton, GooglePlusShareButton, LinkedinShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, GooglePlusIcon, LinkedinIcon, EmailIcon } from 'react-share';


const ShareLinks = () => {
    const url = "https://www.npmjs.com/package/react-share";
    const size = 32;
    return(
        <div>
            <span>Share Links:</span>
            <div className={"shareButtons"}>
                <FacebookShareButton url={url} className={"shareButton"}>
                    <FacebookIcon size={size} round={true}/>
                </FacebookShareButton>
                <GooglePlusShareButton url={url} className={"shareButton"}>
                    <GooglePlusIcon size={size} round={true}/>
                </GooglePlusShareButton>
                <TwitterShareButton url={url} className={"shareButton"}>
                    <TwitterIcon size={size} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url={url} className={"shareButton"}>
                    <LinkedinIcon size={size} round={true}/>
                </LinkedinShareButton>
                <EmailShareButton url={url} className={"shareButton"}>
                    <EmailIcon size={size} round={true}/>
                </EmailShareButton>
            </div>
        </div>
    )
}

export default ShareLinks;