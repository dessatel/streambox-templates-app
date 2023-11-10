import React, { useState, useEffect } from "react"
import "./styles/setting-style.css"
import ReactTooltip from "react-tooltip"
import { isLocalDev, md5, attemptLogin, debounce } from "./Utils"

import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
import "prismjs/themes/prism.css"

export default function Settings(props) {
    const [templateOptions, setTemplateOptions] = useState([])
    const [currentTemplateName, setCurrentTemplateName] = useState(
        localStorage.getItem("templateName")
            ? localStorage.getItem("templateName")
            : "none"
    )
    const [currentEditTemplateName, setCurrentEditTemplateName] = useState("")
    const [saveDisabled, setSaveDisabled] = useState(true)
    const [deleteDisabled, setDeleteDisabled] = useState(true)
    const [createDisabled, setCreateDisabled] = useState(true)
    const [isRerender, setIsRerender] = useState(false)
    const [codeValue, setCodeValue] = useState("")
    const [useDefaultTemplateState, setUseDefaultTemplateState] = useState(
        localStorage.getItem("useDefaultTemplate")
    )
    const endpoint = props.endpoint

    //check if any url params present for userid
    //if no url params passed in, check if local storage set with these vals
    //if there are, then check against the 'db'
    //if they match, then set local storage with these vals
    //logout should destroy local storage for userid and pass
    useEffect(() => {
        initializeLoginSection()
        initializeTemplateSection()
        document.querySelector(".settings-btn").classList.add("selected-route")
        if (isRerender) {
            //reset all fields on settings rerender
            document.querySelector("#codeArea").textContent = ""
            document.getElementById("template-area").style.display = "none"
            document.getElementById("file-input").value = ""
            let selects = document.getElementsByClassName("settings-select")
            for (let select of selects) {
                select.value = "none"
            }
            setCreateDisabled(true)
            setSaveDisabled(true)
            setDeleteDisabled(true)
            setIsRerender(false)
        }

        const fetchData = async () => {
            let response = ""
            try {
                response = await fetch(`${endpoint}/REST/templates/_list`)
            } catch (err) {
                alert(
                    "There was a problem retrieving templates from the server."
                )
                return
            }
            let json = await response.json()
            if (currentTemplateName === "none" && json && json.length > 0) {
                alert(
                    "No template is selected.  Please choose one and apply the template."
                )
            } else if (currentTemplateName === "none") {
                alert("No templates found on server. Please create some.")
            }
            let templateOptionsArr = json.map((template, index) => (
                <option key={`template-option-${index}`} value={template.name}>
                    {template.name}
                </option>
            ))
            templateOptionsArr.unshift(
                <option key={`template-option-default`} value="none">
                    Choose One
                </option>
            )
            setTemplateOptions(templateOptionsArr)
        }
        fetchData()
    }, [currentTemplateName, isRerender])

    const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
            .split("\n")
            .map(
                (line, i) =>
                    `<span class='editorLineNumber'>${i + 1}</span>${line}`
            )
            .join("\n")

    async function applyTemplate(e) {
        e.preventDefault()
        const selectedTemplate = e.target[0].value
        if (selectedTemplate !== "none") {
            //save template name in local storage
            localStorage.setItem("templateName", selectedTemplate)
            setCurrentTemplateName(selectedTemplate)
            await props.handleChangeTemplate()
            alert("Template Applied")
        }
    }

    const [needCustom, setNeedCustom] = useState(false);
    const [strCustomServer, setStrCustomServer] = useState(localStorage.getItem("cloudServer")+localStorage.getItem("customServerPostfix")||".streambox.com");//useState('ponies.and.unicorns.com');

    const [strLogin, setStrLogin] = useState('');
    const [strPassword, setStrPassword] = useState('');
   
//useState(localStorage.getItem("cloudServer")+(localStorage.getItem("customServerPostfix")||".streambox.com"));

    async function processCustom(e) {
		setNeedCustom(e=="Custom");
    }

// states: needCustom, strCustomServer
// storage: cloudServer (LivePost, LiveEU, etc) , cloudServerPostfix(.streambox.com/ls)
// storage: cloudServer ("custom.ponies.com")   , cloudServerPostfix(/light)

    async function processNewServer(e) {
		if (needCustom) {
			localStorage.setItem("cloudServer", strCustomServer);
//			localStorage.setItem("customServerPostfix", "/light");
			localStorage.setItem("customServerPostfix", "");
		} else {
			localStorage.setItem("cloudServer", e);
//			localStorage.setItem("customServerPostfix", ".streambox.com/ls");
			localStorage.setItem("customServerPostfix", ".streambox.com");
		}
    }



    async function changeDefaultTemplateWrapper(e) {
        e.preventDefault()
        let templateName = e.target[0].value
        if (templateName !== "none") {
            changeDefaultTemplate(templateName)
        }
    }

    async function changeDefaultTemplate(templateName) {
        let response

        let formData = new FormData()
        formData.append("templatename", templateName)

        if (isLocalDev) {
            response = await fetch(
                "http://localhost:5005" + `/sbuiauth/changeDefaultTemplate.php`,
                {
                    method: "post",
                    body: formData,
                }
            ).catch(console.error)
        } else {
            response = await fetch(
                endpoint + `/sbuiauth/changeDefaultTemplate.php`,
                {
                    method: "post",
                    body: formData,
                }
            ).catch(console.error)
        }

        let result = await response.text()
        setCurrentTemplateName(templateName)
        localStorage.setItem("defaultTemplate", templateName)
        await props.handleChangeTemplate()
        alert(result)
    }

    async function getDefaultTemplate() {
        let response

        if (isLocalDev) {
            response = await fetch(
                "http://localhost:5005" + "/sbuiauth/getDefaultTemplate.php"
            ).catch(console.error)

            let result = await response.text()

            localStorage.setItem("defaultTemplate", result)
        } else {
            response = await fetch(
                endpoint + "/sbuiauth/getDefaultTemplate.php"
            ).catch(console.error)

            let result = await response.text()

            localStorage.setItem("defaultTemplate", result)
        }
    }

    async function attemptLoginSubmit(e) {
        e.preventDefault()
        const login = strLogin;//e.target[1].value
        const hashedPass = md5(strPassword);//md5(e.target[2].value)
        const serverIndex = e.target[0].selectedIndex
        const chosenServer = serverList[serverIndex]

        if (chosenServer !== localStorage.getItem("cloudServer")) {
            localStorage.removeItem("sessionDRM")
        }

//        localStorage.setItem("cloudServer", chosenServer)
    	processNewServer(chosenServer);

        const controller = new AbortController()
        //timeout if no signal for 15 seconds
        const timeoutId = setTimeout(() => controller.abort(), 15000)

        let response = await fetch(
            `https://${localStorage.getItem("cloudServer")}${localStorage.getItem("customServerPostfix")||".streambox.com"}/ls/VerifyLoginXML.php?login=${login}&hashedPass=${hashedPass}`,
            {
                method: "GET",
                signal: controller.signal,
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                },
            }
        ).catch((e) => {
            document.querySelector("#login-status").textContent =
                "The Server is Down..."
            document.querySelector("#login-status").style.color = "red"
        })

        let result = await response.text()

        let parser = new DOMParser()
        let xmlDoc = parser.parseFromString(result, "text/xml")
        let parsedXML = xmlDoc.getElementsByTagName("body")[0]

        if (parsedXML.getAttribute("result") === "success") {
            //login success
            hideLoginElems()

            document.querySelector("#login-status").textContent =
                "Logged In" + `- ${localStorage.getItem("cloudServer")}`
            document.querySelector("#login-status").style.color = "green"

            localStorage.setItem("cloudLogin", login)
            localStorage.setItem("cloudPass", hashedPass)

            localStorage.setItem("user_id", parsedXML.getAttribute("user_id"))
        } else {
            document.querySelector("#login-status").textContent =
                "Login Failure: Username/Password is incorrect"
            document.querySelector("#login-status").style.color = "red"
        }
    }
    function openEditPage() {
        document.getElementById("create-container").style.display = "none"
        document.getElementById("edit-container").style.display = "flex"
    }

    function openApplyPage() {
        document.getElementById("create-container").style.display = "flex"
        document.getElementById("edit-container").style.display = "none"
    }

    async function initializeLoginSection() {
        let loginResult = await attemptLogin()
        if (loginResult === "success") {
            hideLoginElems()

            document.querySelector("#login-status").textContent =
                "Logged In" + `- ${localStorage.getItem("cloudServer")}`
            document.querySelector("#login-status").style.color = "green"
        }

        if (
            localStorage.getItem("cloudServer") === "" ||
            localStorage.getItem("cloudServer") === undefined ||
            localStorage.getItem("cloudServer") === null
        ) {
            localStorage.setItem("cloudServer", "LivePOST")
        }
        const storedCloudServer = localStorage.getItem("cloudServer")
        let options = document.querySelector(".server-select").options

        for (let option of options) {
            if (option.value === storedCloudServer) {
                option.selected = true
            }
        }

        document.querySelector(".hostname-input").value =
            localStorage.getItem("hostName")
    }

    async function initializeTemplateSection() {
        await getDefaultTemplate()
        // changeDefaultTemplate()

        let useDefaultTemplate = useDefaultTemplateState

        if (useDefaultTemplate === null) {
            localStorage.setItem("useDefaultTemplate", "true")
            setUseDefaultTemplateState("true")
            useDefaultTemplate = "true"
        }

        if (useDefaultTemplate === "true") {
            document.querySelector(".default-template-cbox").checked = true
            let defaultTemplate = localStorage.getItem("defaultTemplate")

            if (defaultTemplate === null) {
                localStorage.setItem(
                    "defaultTemplate",
                    "Dark Prod Template (Read-only)"
                )
                defaultTemplate = "Dark Prod Template (Read-only)"
            }
            handleCheckedDefaultBox(defaultTemplate, "true")
        } else if (useDefaultTemplate === "false") {
            document.querySelector(".default-template-cbox").checked = false
            let templateName = localStorage.getItem("templateName")
            handleUncheckedDefaultBox(templateName, "false")
        }
    }

    function handleCheckedDefaultBox(defaultTemplate, defaultTemplateState) {
        document.querySelector(
            ".change-default-template-wrapper"
        ).style.display = "initial"
        document.querySelector(
            ".change-custom-template-wrapper"
        ).style.display = "none"
        setUseDefaultTemplateState(defaultTemplateState)
        setCurrentTemplateName(defaultTemplate)
    }

    function handleUncheckedDefaultBox(template, defaultTemplateState) {
        document.querySelector(
            ".change-default-template-wrapper"
        ).style.display = "none"
        document.querySelector(
            ".change-custom-template-wrapper"
        ).style.display = "initial"
        setUseDefaultTemplateState(defaultTemplateState)
        setCurrentTemplateName(template)
    }

    async function deleteTemplate() {
        if (
            confirm(
                "Are you sure you want to delete " + currentEditTemplateName
            )
        ) {
            let response = await fetch(
                `${endpoint}/REST/templates/${currentEditTemplateName}`,
                {
                    method: "DELETE",
                }
            )
            let text = await response.text()
            let parsedText = JSON.parse(text)

            if (parsedText.errmsg === "deleted") {
                alert(currentEditTemplateName + " has been deleted")
            } else {
                alert("Error deleting " + currentEditTemplateName)
            }
            setIsRerender(true)
        }
    }

    function isReadOnlyTemplate(templateName) {
        if (
            //these should never be altered
            templateName === "Colorful Prod Template (Read-only)" ||
            templateName === "Dark Prod Template (Read-only)" ||
            templateName === "Light Prod Template (Read-only)"
        ) {
            return true
        }

        return false
    }

    async function editTemplate(e) {
        e.preventDefault()
        const selectedTemplate = e.target[0].value
        if (selectedTemplate !== "none") {
            setCreateDisabled(false)
            let response = await fetch(
                `${endpoint}/REST/templates/${selectedTemplate}`
            )
            let json
            try {
                json = await response.json()
            } catch (e) {
                // document.querySelector(".edit-template-area").value =
                //     "This JSON file is not formatted correctly"

                setCodeValue("This JSON file is not formatted correctly")
                return
            }
            const prettyJson = JSON.stringify(json, undefined, 2)
            document.getElementById("template-area").style.display = "flex"
            document.getElementById("down-arrow").style.display = "initial"
            // document.querySelector(".edit-template-area").value = prettyJson

            setCodeValue(prettyJson)

            document.querySelector(
                ".template-area-status"
            ).innerHTML = `Editing Template: <span style="color: #2195ce;">${selectedTemplate}</span>`

            if (isReadOnlyTemplate(selectedTemplate)) {
                setSaveDisabled(true)
                setDeleteDisabled(true)
            } else {
                setSaveDisabled(false)
                setDeleteDisabled(false)
            }

            setCurrentEditTemplateName(selectedTemplate)
        }
    }

    async function saveTemplate() {
        //send request to node server to save current template
        if (
            confirm(
                "Are you sure you want to save template: " +
                    currentEditTemplateName
            )
        ) {
            let formData = new FormData()
            formData.append("filename", currentEditTemplateName)
            formData.append(
                "filedata",
                document.querySelector("#codeArea").textContent
            )

            let response = await fetch(`${endpoint}/REST/templates/newfile`, {
                method: "POST",
                body: formData,
            })
            let text = await response.text()
            let parsedText = JSON.parse(text)

            if (parsedText.errmsg === "written") {
                alert("Saved edited template: " + currentEditTemplateName)
            } else {
                alert("Error saving template")
            }

            if (currentTemplateName === currentEditTemplateName) {
                props.handleChangeTemplate()
            }

            setIsRerender(true)
        }
    }

    async function createTemplate(e) {
        e.preventDefault()

        let templateName = prompt("Please enter a template new template name:")
        if (templateName == null || templateName == "") {
            alert("Template name is blank.")
        } else {
            let formData = new FormData()
            formData.append("filename", templateName)
            formData.append(
                "filedata",
                document.querySelector("#codeArea").textContent
            )
            let response = await fetch(`${endpoint}/REST/templates/newfile`, {
                method: "POST",
                body: formData,
            })

            let text = await response.text()
            let parsedText = JSON.parse(text)

            if (parsedText.errmsg === "written") {
                alert("Created new template: " + templateName)
            } else {
                alert("Error creating template")
            }

            setIsRerender(true)
        }
    }

    function handleSaveTemplateBtn(e) {
        let value = e.target.value
        if (value === "none") {
            setSaveDisabled(true)
            setDeleteDisabled(true)
            setCreateDisabled(true)
            setCurrentEditTemplateName("none")
        } else if (!isReadOnlyTemplate(value)) {
            setCurrentEditTemplateName(value)
            setDeleteDisabled(false)
        }
    }

    async function handleUploadSubmit(e) {
        e.preventDefault()
        let formData = new FormData()
        let fileInput = document.getElementById("file-input")
        formData.append("file", fileInput.files[0])
        console.log(fileInput.files[0])
        let response
        if (isLocalDev) {
            response = await fetch(
                "http://localhost:5005" + "/sbuiauth/receiveFile.php",
                {
                    method: "post",
                    body: formData,
                }
            ).catch(console.error)
        } else {
            response = await fetch(endpoint + "/sbuiauth/receiveFile.php", {
                method: "post",
                body: formData,
            }).catch(console.error)
        }

        let json = await response.text()
        let [responseText, extension] = JSON.parse(json)

        if (responseText === "success") {
            alert("File uploaded successfully")
            document.getElementsByClassName(
                "logo"
            )[0].src = `${endpoint}/sbuiauth/logo/logo${extension}`
        } else if (responseText === "failure") {
            alert("Invalid file format. Please use .svg, .png or .jpg files.")
        }
    }

    function logout() {
        showLoginElems()

        localStorage.removeItem("cloudLogin")
        localStorage.removeItem("cloudPass")
        localStorage.removeItem("user_id")
        localStorage.removeItem("sessionServerIP")
    }

    function hideLoginElems() {
        let elems = document.getElementsByClassName("login-input")
        for (let elem of elems) {
            elem.style.display = "none"
        }
        document.querySelector(".cloud-server-div").style.display = "none"
        document.getElementById("logout-btn").style.display = "initial"
    }

    function showLoginElems() {
        let elems = document.getElementsByClassName("login-input")
        for (let elem of elems) {
            elem.style.display = "initial"
        }
        document.getElementById("logout-btn").style.display = "none"
        document.querySelector(".cloud-server-div").style.display = "initial"
        document.querySelector("#login-status").textContent =
            "Logged Out" + `- ${localStorage.getItem("cloudServer")}`
        document.querySelector("#login-status").style.color = "red"
    }

    async function toggleDefaultTemplate() {
        let defaultTemplate = localStorage.getItem("defaultTemplate")
        let isChecked = document.querySelector(".default-template-cbox").checked

        if (defaultTemplate === null || defaultTemplate === "") {
            defaultTemplate = "Dark Prod Template (Read-only)"
            localStorage.setItem("defaultTemplate", defaultTemplate)
        }

        if (isChecked) {
            localStorage.setItem("useDefaultTemplate", "true")
            handleCheckedDefaultBox(defaultTemplate, "true")
        } else {
            localStorage.setItem("useDefaultTemplate", "false")
            let templateName = localStorage.getItem("templateName")
            handleUncheckedDefaultBox(templateName, "false")
        }

        await props.handleChangeTemplate()
    }

    let serverList = []

    if (isLocalDev) {
        serverList = [
            "TL1",
            "LiveUS",
            "LiveUSEast",
            "LivePOST",
            "LiveJP",
            "LiveAU",
            "LiveSG",
            "LiveEU",
            "LiveIN",
            "LiveSA",
            "LiveDE",
            "Custom",
        ]
    } else {
        serverList = [
            "LiveUSEast",
            "LivePOST",
            "LiveJP",
            "LiveAU",
            "LiveIN",
            "LiveEU",
            "Custom",
        ]
    }

    let serverOptions = serverList.map((server, index) => (
        <option key={`server-option-${index}`} value={server}>
            {server}
        </option>
    ))

    return (
        <>
            <ReactTooltip />
            <div id="create-container" className="settings-outer-container">
                <div className="settings-inner-container">
                    <div className="settings-container">
                        <form
                            onSubmit={attemptLoginSubmit}
                            className="settings-form template-form-padding"
                        >
                            <div className="cloud-server-div">
                                <div className="settings-label">
                                    <label className="template-label">
                                        <h4>Cloud Server</h4>
                                        <img
                                            className="tooltip"
                                            src="../../images/information.png"
                                            data-tip="
                            Select which cloud server to pull data from
                        "
                                        />
                                    </label>
                                </div>
                                <select className="server-select" onChange={(e) => processCustom(e.target.value)}>
                                    {serverOptions}
                                </select>
                            </div>
                            { needCustom &&
                            <input
                                type="text"
                                className="custom-server"
                                value={strCustomServer}
                                onChange={(e) => setStrCustomServer(e.target.value)}
                            />
                            }

                            <div className="settings-label">
                                <label className="template-label">
                                    <h4>Streambox Cloud Login</h4>
                                    <img
                                        className="tooltip"
                                        src="../../images/information.png"
                                        data-tip="
                            Login to Streambox Cloud to access session dashboard features
                        "
                                    />
                                </label>
                            </div>
                            <input
                                className="login-input"
                                type="text"
                                onChange={(e) => setStrLogin(e.target.value)}
                                placeholder=" Username"
                            />
                            <input
                                className="login-input"
                                type="password"
                                onChange={(e) => setStrPassword(e.target.value)}
                                placeholder=" Password"
                            />
                            <input
                                id="login-submit-btn"
                                className="login-input"
                                type="submit"
                                value="Login"
                            />
                            <div className="login-status-container template-form-padding">
                                <label>Login Status:</label>&nbsp;
                                <span
                                    id="login-status"
                                    style={{ color: "red" }}
                                >
                                    Logged Out -{" "}
                                    {localStorage.getItem("cloudServer")}
                                </span>
                            </div>
                            <div className="settings-label">
                                <label className="template-label">
                                    <h4>Host Name</h4>
                                    <img
                                        className="tooltip"
                                        src="../../images/information.png"
                                        data-tip="
                            The host name that will be presented in the email invites
                        "
                                    />
                                </label>
                            </div>
                            <input
                                type="text"
                                className="hostname-input"
                                onChange={debounce(() => {
                                    localStorage.setItem(
                                        "hostName",
                                        document.querySelector(
                                            ".hostname-input"
                                        ).value
                                    )
                                })}
                            />
                        </form>
                        <button
                            id="logout-btn"
                            style={{ display: "none" }}
                            onClick={logout}
                        >
                            Logout
                        </button>
                        <hr className="custom-hr" />
                        <div className="settings-label">
                            <label className="template-label">
                                <h4>Use Default Template</h4>
                                <img
                                    className="tooltip"
                                    src="../../images/information.png"
                                    data-tip="
                            Use the default template (Saved per Chroma)
                        "
                                />
                                <input
                                    className="default-template-cbox"
                                    onClick={toggleDefaultTemplate}
                                    type="checkbox"
                                />
                            </label>
                        </div>
                        <div className="change-default-template-wrapper">
                            <div className="settings-label">
                                <label className="template-label">
                                    <h4>Change Default Template</h4>
                                    <img
                                        className="tooltip"
                                        src="../../images/information.png"
                                        data-tip="
                            Choose and apply a default template (Saved per Chroma)
                        "
                                    />
                                </label>
                            </div>
                            <form
                                className="settings-form template-form-padding"
                                onSubmit={changeDefaultTemplateWrapper}
                            >
                                <select className="settings-select">
                                    {templateOptions}
                                </select>
                                <input
                                    className="change-default-template-submit"
                                    type="submit"
                                    value="Change Default Template"
                                />
                            </form>
                        </div>
                        <div className="change-custom-template-wrapper">
                            <div className="settings-label">
                                <label className="template-label">
                                    <h4>Apply Template</h4>
                                    <img
                                        className="tooltip"
                                        src="../../images/information.png"
                                        data-tip="
                            Choose and apply a template
                        "
                                    />
                                </label>
                            </div>
                            <form
                                className="settings-form template-form-padding"
                                onSubmit={applyTemplate}
                            >
                                <select className="settings-select">
                                    {templateOptions}
                                </select>
                                <input type="submit" value="Apply Template" />
                            </form>
                        </div>
                        <div className="current-template-readout template-form-padding">
                            <label>Current Template:</label>&nbsp;
                            <span style={{ color: "forestgreen" }}>
                                {currentTemplateName}
                                {useDefaultTemplateState === "true" &&
                                    " (Default)"}
                            </span>
                        </div>

                        <div className="settings-label">
                            <label className="template-label">
                                <h4>Upload Logo</h4>
                                <img
                                    className="tooltip"
                                    src="../../images/information.png"
                                    data-tip="
                            Upload a logo (.svg, .png, .jpg)
                        "
                                />
                            </label>
                        </div>

                        <form id="form">
                            <input type="file" id="file-input" />
                            <input
                                onClick={(e) => handleUploadSubmit(e)}
                                type="submit"
                                id="submit-btn"
                            />
                        </form>

                        <div className="settings-label">
                            <label className="template-label">
                                <h4>Edit Templates</h4>
                                <img
                                    className="tooltip"
                                    src="../../images/information.png"
                                    data-tip="
                            Edit JSON templates for the app to render
                        "
                                />
                            </label>
                        </div>
                        <button id="edit-btn" onClick={openEditPage}>
                            Edit Template&nbsp;&nbsp;→
                        </button>
                    </div>
                </div>
            </div>
            <div
                id="edit-container"
                className="settings-outer-container"
                style={{ display: "none" }}
            >
                <div className="settings-inner-container">
                    <div className="settings-container">
                        <div className="settings-label">
                            <label className="template-label">
                                <h4>Edit Template</h4>
                                <img
                                    className="tooltip"
                                    src="../../images/information.png"
                                    data-tip="
                            Edit, overwrite, delete or create a template. When a file is chosen from the dropdown, the file will populate in the text area below.  
                            To create a template, click on 'Create Template'.  The template will be created using the JSON code in the text area.
                        "
                                />
                            </label>
                        </div>
                        <form className="settings-form" onSubmit={editTemplate}>
                            <select
                                onChange={handleSaveTemplateBtn}
                                className="settings-select"
                            >
                                {templateOptions}
                            </select>
                            <input type="submit" value="Edit Template" />
                        </form>
                        <button
                            className="save-template-btn"
                            onClick={saveTemplate}
                            disabled={saveDisabled}
                        >
                            Save Template
                        </button>
                        <button
                            className="save-template-btn"
                            onClick={deleteTemplate}
                            disabled={deleteDisabled}
                        >
                            Delete Template
                        </button>
                        <button
                            className="save-template-btn template-form-padding"
                            onClick={createTemplate}
                            disabled={createDisabled}
                        >
                            Create Template
                        </button>
                        {/* <div className="settings-label">
                            <label className="template-label">
                                <h4>Create Template</h4>
                                <img
                                    className="tooltip"
                                    src="/images/information.png"
                                    data-tip="
                            Create a JSON template using the text area 'Template area'.
                        "
                                />
                            </label>
                        </div> */}
                        {/* <form
                            className="settings-form"
                            onSubmit={createTemplate}
                        >
                            <input
                                className="create-template-input"
                                type="text"
                                placeholder="Template Name..."
                            />
                            <input type="submit" value="Create Template" />
                        </form> */}
                        <button id="edit-btn" onClick={openApplyPage}>
                            ←&nbsp;&nbsp;Go Back
                        </button>
                        <img
                            id="down-arrow"
                            src="../../images/down-arrow.png"
                            onClick={() => {
                                scrollBy(0, 800)
                            }}
                        />
                    </div>
                </div>
                {/* <div id="template-area" style={{ display: "none" }}>
                    <div className="template-area-div">
                        <div className="template-area-label-div">
                            <label className="template-area-status-label">
                                <h5 className="template-area-status"></h5>
                            </label>
                        </div>
                        <textarea
                            className="edit-template-area"
                            placeholder="JSON template will populate here upon selection..."
                        ></textarea>
                    </div>
                </div> */}
                <div id="template-area" style={{ display: "none" }}>
                    <div className="template-area-div">
                        <div className="template-area-label-div">
                            <label className="template-area-status-label">
                                <h3 className="template-area-status"></h3>
                            </label>
                        </div>
                        <Editor
                            value={codeValue}
                            onValueChange={(code) => setCodeValue(code)}
                            highlight={(code) =>
                                hightlightWithLineNumbers(code, languages.js)
                            }
                            padding={10}
                            textareaId="codeArea"
                            className="editor"
                            style={{
                                fontFamily:
                                    '"Fira code", "Fira Mono", monospace',
                                fontSize: 18,
                                outline: 0,
                                backgroundColor: "white",
                                color: "black",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
